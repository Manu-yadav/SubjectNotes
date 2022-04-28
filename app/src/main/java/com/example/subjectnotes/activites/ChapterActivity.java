package com.example.subjectnotes.activites;

import android.app.ProgressDialog;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.pdf.PdfDocument;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.os.ParcelFileDescriptor;
import android.provider.MediaStore;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.View;
import android.view.WindowManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.widget.Toolbar;
import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.subjectnotes.R;
import com.example.subjectnotes.adaptor.ChapterContentAdaptor;
import com.example.subjectnotes.adaptor.SpinnerAdaptor;
import com.example.subjectnotes.appDialog.AppDialog;
import com.example.subjectnotes.models.ChapterModel;
import com.example.subjectnotes.models.SubjectModel;
import com.example.subjectnotes.utils.Constants;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.scanlibrary.ScanActivity;
import com.scanlibrary.ScanConstants;
import com.shockwave.pdfium.PdfiumCore;
import com.theartofdev.edmodo.cropper.CropImage;
import com.theartofdev.edmodo.cropper.CropImageView;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class ChapterActivity extends BaseActivity {

    private Toolbar mToolbar;
    private TextView mNoContentFoundTV;
    private FloatingActionButton mAddContentButton;
    private RecyclerView mChapterContentRV;
    private File mChapterFile;
    private String mChapterName;
    private String mChapterFilePath;
    private File imageFile;
    static final int REQUEST_IMAGE_CAPTURE = 1;
    private Uri photoURI;
    private ChapterContentAdaptor mCustomAdaptor;
    private ArrayList<ChapterModel> mContentList;
    // constant to compare
    // the activity result code
    int SELECT_PICTURE = 200;
    int SELECT_PDF = 300;
    private Spinner mChapSpinner;
    private SpinnerAdaptor mSpinnerAdaptor;
    private ArrayList<SubjectModel> mSpinnerDataList;
    private SubjectModel mChapterModel;
    private ProgressDialog pDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chapter);
        initView();
        initVariables();
    }

    @Override
    void initView() {
        initDialog();
        showDialog();
        mToolbar = (Toolbar) findViewById(R.id.tool);
        mNoContentFoundTV = (TextView) findViewById(R.id.tv_no_chapter);
        mAddContentButton = (FloatingActionButton) findViewById(R.id.fab_add_chapter);
        mChapterContentRV = (RecyclerView) findViewById(R.id.rv_chapters);
        mChapSpinner = (Spinner) findViewById(R.id.spinner);
        mChapSpinner.getBackground().setColorFilter(getResources().getColor(R.color.white), PorterDuff.Mode.SRC_ATOP);
        mChapSpinner.setVisibility(View.VISIBLE);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(getApplicationContext(), R.layout.simple_spinner_item, getResources().getStringArray(android.R.array.emailAddressTypes));
        mChapSpinner.setAdapter(adapter);
    }

    private void initDialog() {
        pDialog = new ProgressDialog(this);
        pDialog.setTitle(this.getString(R.string.app_name));
        pDialog.setMessage("Loading...");
        pDialog.setIndeterminate(false);
        pDialog.setCancelable(false);
    }

    private void showDialog(){
        if(pDialog != null){
            pDialog.show();
        }
    }

    private void dismissDialog(){
        if(pDialog != null){
            pDialog.dismiss();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        mChapSpinner.setVisibility(View.VISIBLE);
    }

    @Override
    protected void onPause() {
        super.onPause();
        mChapSpinner.setVisibility(View.GONE);
    }

    @Override
    void initVariables() {
        mContentList = new ArrayList<>();
        Intent intent = getIntent();
        if (intent != null) {
            mChapterModel = (SubjectModel) intent.getSerializableExtra(Constants.CHAPTER_OBJ);
            mChapterFile = mChapterModel.getFile();
            mChapterName = mChapterModel.getFileName();
            mChapterFilePath = mChapterModel.getFilePath();
        }
        setToolbar(mToolbar, mChapterName);
        mAddContentButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // ImagePicker.pickImage(ChapterActivity.this, "Select :");
                AppDialog.showCamDialog(ChapterActivity.this, false).show();
            }
        });
        mCustomAdaptor = new ChapterContentAdaptor(this, mContentList);
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 3);
        mChapterContentRV.setLayoutManager(gridLayoutManager);
        mChapterContentRV.setAdapter(mCustomAdaptor);
        //checkForAlreadyAddedContent(mChapterFile);
        initSpinnerContent();
    }

    private void initSpinnerContent() {
        initSpinnerListData();
        mChapSpinner.setOnItemSelectedListener(
                new AdapterView.OnItemSelectedListener() {
                    @Override
                    public void onItemSelected(AdapterView<?> parent,
                                               View view, int position, long id) {
                        // It returns the clicked item.
                        String name = mSpinnerDataList.get(position).getFileName();
                        checkForAlreadyAddedContent(mSpinnerDataList.get(position).getFile());
                        Toast.makeText(ChapterActivity.this, name + " selected", Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onNothingSelected(AdapterView<?> parent) {
                    }
                });
    }

    private void initSpinnerListData() {
        mSpinnerDataList = new ArrayList<SubjectModel>();
        mSpinnerAdaptor = new SpinnerAdaptor(this, mSpinnerDataList);
        mChapSpinner.setAdapter(mSpinnerAdaptor);
        if (mChapterFile.getParentFile().exists()) {
            File[] subjects = mChapterFile.getParentFile().listFiles();
            if (subjects.length > 0) {
                for (int i = 0; i < subjects.length; i++) {
                    SubjectModel subjectModel = new SubjectModel();
                    subjectModel.setFile(subjects[i]);
                    subjectModel.setFileName(subjects[i].getName());
                    subjectModel.setFilePath(subjects[i].getAbsolutePath());
                    subjectModel.setParentFile(mChapterFile.getParentFile().getParentFile());
                    if (!subjectModel.getFileName().equals(mChapterModel.getFileName())) {
                        mSpinnerDataList.add(subjectModel);
                    }
                }
                mSpinnerDataList.add(0, mChapterModel);

                mSpinnerAdaptor.notifyDataSetChanged();
            } else {
                Toast.makeText(this, "ERROR: Wile adding spinner data", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void checkForAlreadyAddedContent(File file) {
        mContentList.clear();
        if (file.exists()) {
            File[] subjects = file.listFiles();
            if (subjects.length > 0) {
                mNoContentFoundTV.setVisibility(View.GONE);
                for (int i = 0; i < subjects.length; i++) {
                    if (!subjects[i].getName().equals("merged_file.pdf")) {
                        ChapterModel subjectModel = new ChapterModel();
                        subjectModel.setmImageFile(subjects[i]);
                        subjectModel.setmImageFileName(subjects[i].getName());
                        subjectModel.setmImageFilePath(subjects[i].getAbsolutePath());
                        subjectModel.setParentFile(file);
                        mContentList.add(subjectModel);
                    }
                }
                mCustomAdaptor.notifyDataSetChanged();
            } else {
                mNoContentFoundTV.setVisibility(View.VISIBLE);
            }
        }
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        dismissDialog();
    }

    private void setToolbar(Toolbar toolbar, String title) {
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        toolbar.setNavigationIcon(null);
        toolbar.setTitleTextColor(getResources().getColor(R.color.white));
        toolbar.setNavigationIcon(R.drawable.icon_back);
        //toolbar.setTitleTextAppearance(this, R.style.proxima_nova_semibold);
        //  toolbar.setTitle(title);
    }

    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            try {
                Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), photoURI);
                sendForCropper(photoURI);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else if (requestCode == CropImage.CROP_IMAGE_ACTIVITY_REQUEST_CODE) {
            CropImage.ActivityResult result = CropImage.getActivityResult(data);
            if (resultCode == RESULT_OK) {
                Uri resultUri = result.getUri();
                try {
                    Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), resultUri);
                    createPdf(getScaledBitmap(bitmap));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            } else if (resultCode == CropImage.CROP_IMAGE_ACTIVITY_RESULT_ERROR_CODE) {
                Exception error = result.getError();
            }
        } else if (requestCode == SELECT_PICTURE && resultCode == RESULT_OK) {
            // Get the url of the image from data
            Uri selectedImageUri = data.getData();
            sendForCropper(selectedImageUri);
/*            if (null != selectedImageUri) {
                try {
                    Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), selectedImageUri);
                    createFileName(bitmap);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }*/
        } else if (requestCode == SELECT_PDF && resultCode == RESULT_OK) {
            // Get the url of the image from data
            ClipData clipData = data.getClipData();
            if (clipData != null){
                // Multiple pdf selected.
                for (int i = 0; i < clipData.getItemCount(); i++) {
                    ClipData.Item item = clipData.getItemAt(i);
                    createPdf(generateImageFromPdf(item.getUri()));
                }
            }else {
                // Single pdf selected.
                Uri selectedImageUri = data.getData();
                Bitmap bitmap = generateImageFromPdf(selectedImageUri);
                createPdf(bitmap);
            }
/*            if (null != selectedImageUri) {
                try {
                    Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), selectedImageUri);
                    createFileName(bitmap);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }*/
        }
    }

    Bitmap generateImageFromPdf(Uri pdfUri) {
        int pageNumber = 0;
        PdfiumCore pdfiumCore = new PdfiumCore(this);
        Bitmap bmp = null;
        try {
            //http://www.programcreek.com/java-api-examples/index.php?api=android.os.ParcelFileDescriptor
            ParcelFileDescriptor fd = getContentResolver().openFileDescriptor(pdfUri, "r");
            com.shockwave.pdfium.PdfDocument pdfDocument = pdfiumCore.newDocument(fd);
            pdfiumCore.openPage(pdfDocument, pageNumber);
            int width = pdfiumCore.getPageWidthPoint(pdfDocument, pageNumber);
            int height = pdfiumCore.getPageHeightPoint(pdfDocument, pageNumber);
            Log.e("Width_height", "" + width + " " + height);
            bmp = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
            pdfiumCore.renderPageBitmap(pdfDocument, bmp, pageNumber, 0, 0, width, height);
            pdfiumCore.closeDocument(pdfDocument); // important!
        } catch (Exception e) {
            //todo with exception
        }
        return bmp;
    }

    private Bitmap getScaledBitmap(Bitmap bitmap) {
        int nh = (int) (bitmap.getHeight() * (512.0 / bitmap.getWidth()));
        return Bitmap.createScaledBitmap(bitmap, 512, nh, true);
    }

    private void sendForCropper(Uri uri) {
        CropImage.activity(uri)
                .setGuidelines(CropImageView.Guidelines.ON)
                .start(this);
    }

    public void createFileName(final Bitmap bitmap) {
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
        byte[] byteArray = stream.toByteArray();
        String state = Environment.getExternalStorageState();
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String TEMP_PHOTO_FILE_NAME = "JPEG_" + timeStamp + ".jpg";
        final File mFileTemp;
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            mFileTemp = new File(mChapterFilePath, TEMP_PHOTO_FILE_NAME);
        } else {
            mFileTemp = new File(this.getFilesDir(), TEMP_PHOTO_FILE_NAME);
        }
        try {
            //convert array of bytes into file
            FileOutputStream fileOuputStream = new FileOutputStream(mFileTemp);
            fileOuputStream.write(byteArray);
            fileOuputStream.close();
            System.out.println("Done");

            ChapterModel chapterModel = new ChapterModel();
            chapterModel.setmImageFile(mFileTemp);
            chapterModel.setmImageFilePath(mFileTemp.getAbsolutePath());
            chapterModel.setmImageFileName(mFileTemp.getName());
            chapterModel.setParentFile(mChapterFile);
            mContentList.add(chapterModel);
            mCustomAdaptor.notifyDataSetChanged();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    String currentPhotoPath;

    private File createImageFile() {
        // Create an image file name
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String imageFileName = "JPEG_" + timeStamp + "_";
        File storageDir = getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        File image = null;
        try {
            image = File.createTempFile(imageFileName, ".jpg", storageDir);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Save a file: path for use with ACTION_VIEW intents
        currentPhotoPath = image.getAbsolutePath();
        return image;
    }

    public void dispatchTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        // Ensure that there's a camera activity to handle the intent
        if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
            // Create the File where the photo should go
            File photoFile = null;
            try {
                photoFile = createImageFile();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
            // Continue only if the File was successfully created
            if (photoFile != null) {
                photoURI = FileProvider.getUriForFile(this,
                        this.getApplicationContext().getPackageName() + ".provider",
                        photoFile);
                takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoURI);
                startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
            }
        }

    }

    public void dispatchSelectGalleryIntent() {
        Intent i = new Intent();
        i.setType("image/*");
        i.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(Intent.createChooser(i, "Select Picture"), SELECT_PICTURE);
    }

    public void dispatchSelectPdfIntent() {
        Intent i = new Intent();
        i.setType("application/pdf");
        i.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
        i.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(Intent.createChooser(i, "Select PDF"), SELECT_PDF);
    }

    private void createPdf(Bitmap bitmap) {
        WindowManager wm = (WindowManager) getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        DisplayMetrics displaymetrics = new DisplayMetrics();
        this.getWindowManager().getDefaultDisplay().getMetrics(displaymetrics);
        float hight = displaymetrics.heightPixels;
        float width = displaymetrics.widthPixels;

        int convertHighet = (int) hight, convertWidth = (int) width;

//        Resources mResources = getResources();
//        Bitmap bitmap = BitmapFactory.decodeResource(mResources, R.drawable.screenshot);

        PdfDocument document = new PdfDocument();
        PdfDocument.PageInfo pageInfo = new PdfDocument.PageInfo.Builder(bitmap.getWidth(), bitmap.getHeight(), 1).create();
        PdfDocument.Page page = document.startPage(pageInfo);

        Canvas canvas = page.getCanvas();
        Paint paint = new Paint();
        paint.setColor(Color.parseColor("#ffffff"));
        canvas.drawPaint(paint);
        bitmap = Bitmap.createScaledBitmap(bitmap, bitmap.getWidth(), bitmap.getHeight(), true);

        paint.setColor(Color.BLUE);
        canvas.drawBitmap(bitmap, 0, 0, null);
        document.finishPage(page);
        // write the document content
        /* String targetPdf = "/sdcard/test.pdf";*/
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String targetPdf = mChapterModel.getFileName() + timeStamp + ".pdf";
        File filePath = new File(mChapterFilePath, targetPdf);
        try {
            document.writeTo(new FileOutputStream(filePath));
            ChapterModel chapterModel = new ChapterModel();
            chapterModel.setmImageFile(filePath);
            chapterModel.setmImageFilePath(filePath.getAbsolutePath());
            chapterModel.setmImageFileName(filePath.getName());
            chapterModel.setParentFile(mChapterFile);
            mContentList.add(chapterModel);
            mCustomAdaptor.notifyDataSetChanged();
            mNoContentFoundTV.setVisibility(View.GONE);
        } catch (IOException e) {
            e.printStackTrace();
            Toast.makeText(this, "Something wrong: " + e.toString(), Toast.LENGTH_LONG).show();
        }
        // close the document
        document.close();
    }

    public void deleteFile(ChapterModel chapterModel) {
        File file = chapterModel.getmImageFile();
        if (file != null) {
            if (file.exists()) {
                file.delete();
            }
        }
        mContentList.remove(chapterModel);
        mCustomAdaptor.notifyDataSetChanged();
    }

    public void startScanner() {
        int REQUEST_CODE = 99;
        int preference = ScanConstants.OPEN_CAMERA;
        Intent intent = new Intent(this, ScanActivity.class);
        intent.putExtra(ScanConstants.OPEN_INTENT_PREFERENCE, preference);
        startActivityForResult(intent, REQUEST_CODE);
    }
}