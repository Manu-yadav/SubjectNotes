package com.example.subjectnotes.activites;


import android.content.Intent;
import android.graphics.PorterDuff;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.widget.Toolbar;
import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.subjectnotes.R;
import com.example.subjectnotes.adaptor.CustomAdapter;
import com.example.subjectnotes.adaptor.SpinnerAdaptor;
import com.example.subjectnotes.appDialog.AppDialog;
import com.example.subjectnotes.models.SubjectModel;
import com.example.subjectnotes.utils.Constants;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class SubjectActivity extends BaseActivity {

    private Toolbar mToolbar;
    private TextView mNoChapterFoundTV;
    private FloatingActionButton mAddChapterButton;
    private RecyclerView mChapterRV;
    private File mSubjectFile;
    private String mSubjectName;
    private String mSubjectFilePath;
    private ArrayList<SubjectModel> mChapterList;
    private CustomAdapter mCustomAdaptor;
    private EditText mSearchET;
    private Spinner mChapSpinner;
    private ArrayList<SubjectModel> mSpinnerDataList;
    private SpinnerAdaptor mSpinnerAdaptor;
    private SubjectModel mSubjectModel;
    private File mTempZipFile;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_subject);
        initView();
        initVariables();
    }

    @Override
    void initView() {
        mToolbar = (Toolbar) findViewById(R.id.tool);
        mNoChapterFoundTV = (TextView) findViewById(R.id.tv_no_chapter);
        mAddChapterButton = findViewById(R.id.fab_add_chapter);
        mChapterRV = (RecyclerView) findViewById(R.id.rv_chapters);
        mSearchET = (EditText) findViewById(R.id.et_search);
        mChapSpinner = (Spinner) findViewById(R.id.spinner);
        mChapSpinner.getBackground().setColorFilter(getResources().getColor(R.color.white), PorterDuff.Mode.SRC_ATOP);
        mChapSpinner.setVisibility(View.VISIBLE);
    }

    @Override
    protected void onResume() {
        super.onResume();
        mChapSpinner.setVisibility(View.VISIBLE);
        deleteZipFileIfExist();
    }

    private void deleteZipFileIfExist() {
        if (mTempZipFile != null) {
            mTempZipFile.delete();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        mChapSpinner.setVisibility(View.GONE);
    }

    @Override
    void initVariables() {
        Intent intent = getIntent();
        if (intent != null) {
            mSubjectModel = (SubjectModel) intent.getSerializableExtra(Constants.SUBJECT_OBJ);
            mSubjectFile = mSubjectModel.getFile();
            mSubjectName = mSubjectModel.getFileName();
            mSubjectFilePath = mSubjectModel.getFilePath();
        }
        setToolbar(mToolbar, mSubjectName);
        mChapterList = new ArrayList<>();
        mCustomAdaptor = new CustomAdapter(this, mChapterList);
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 3);
        mChapterRV.setLayoutManager(gridLayoutManager);
        mChapterRV.setAdapter(mCustomAdaptor);
        mAddChapterButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AppDialog.showMsgDialog(SubjectActivity.this, false).show();
            }
        });
        mSearchET.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void afterTextChanged(Editable editable) {
                mCustomAdaptor.getFilter().filter(editable.toString());
            }
        });
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
                        mSubjectFile = mSpinnerDataList.get(position).getFile();
                        checkForAlreadyAddedChapter(mSpinnerDataList.get(position).getFile());
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
        if (mSubjectFile.getParentFile().exists()) {
            File[] subjects = mSubjectFile.getParentFile().listFiles();
            if (subjects.length > 0) {
                for (int i = 0; i < subjects.length; i++) {
                    SubjectModel subjectModel = new SubjectModel();
                    subjectModel.setFile(subjects[i]);
                    subjectModel.setFileName(subjects[i].getName());
                    subjectModel.setFilePath(subjects[i].getAbsolutePath());
                    subjectModel.setParentFile(mSubjectFile.getParentFile().getParentFile());
                    if (!subjectModel.getFileName().equals(mSubjectModel.getFileName())) {
                        mSpinnerDataList.add(subjectModel);
                    }
                }
                mSpinnerDataList.add(0, mSubjectModel);
                mSpinnerAdaptor.notifyDataSetChanged();
            } else {
                Toast.makeText(this, "ERROR: While adding spinner data", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void checkForAlreadyAddedChapter(File file) {
        mChapterList.clear();
        if (file.exists()) {
            File[] subjects = file.listFiles();
            if (subjects.length > 0) {
                mNoChapterFoundTV.setVisibility(View.GONE);
                for (int i = 0; i < subjects.length; i++) {
                    SubjectModel subjectModel = new SubjectModel();
                    subjectModel.setFile(subjects[i]);
                    subjectModel.setFileName(subjects[i].getName());
                    subjectModel.setFilePath(subjects[i].getAbsolutePath());
                    subjectModel.setParentFile(file);
                    mChapterList.add(subjectModel);
                }
                mCustomAdaptor.notifyDataSetChanged();
            } else {
                mNoChapterFoundTV.setVisibility(View.VISIBLE);
            }
        }
    }

    private void setToolbar(Toolbar toolbar, String title) {
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        toolbar.setNavigationIcon(null);
        toolbar.setTitleTextColor(getResources().getColor(R.color.white));
        toolbar.setNavigationIcon(R.drawable.icon_back);
    }

    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }

    public void createChapterFolder(String chapterName) {
        String state = Environment.getExternalStorageState();
        if (mSubjectFile.exists()) {
            File currentFile = null;
            if (Environment.MEDIA_MOUNTED.equals(state)) {
                currentFile = new File(mSubjectFile.toString(), chapterName);
            } else {
                currentFile = new File(this.getFilesDir(), chapterName);
            }
            if (currentFile.mkdir()) {
                SubjectModel subjectModel = new SubjectModel();
                subjectModel.setParentFile(mSubjectFile);
                subjectModel.setFile(currentFile);
                subjectModel.setFilePath(currentFile.getAbsolutePath());
                subjectModel.setFileName(currentFile.getName());
                mChapterList.add(subjectModel);
                mCustomAdaptor.notifyDataSetChanged();
                mNoChapterFoundTV.setVisibility(View.GONE);
                Toast.makeText(this, "Chapter created", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "Chapter Already Exits", Toast.LENGTH_SHORT).show();
            }
        } else {
            Toast.makeText(this, "Error: Subject directory not found", Toast.LENGTH_SHORT).show();
        }
    }

    public void deleteFolder(SubjectModel subjectModel) {
        //to end the recursive loop
        delete(subjectModel.getFile());
        mChapterList.remove(subjectModel);
        mCustomAdaptor.notifyDataSetChanged();
    }

    private void delete(File file) {
        //to end the recursive loop
        if (!file.exists())
            return;

        //if directory, go inside and call recursively
        if (file.isDirectory()) {
            for (File f : file.listFiles()) {
                //call recursively
                delete(f);
            }
        }
        //call delete to delete files and empty directory
        file.delete();
    }

    public boolean zip(File[] _files, String zipFileName) {
        boolean createdZip = false;
        int BUFFER_SIZE = 6 * 1024;
        try {
            BufferedInputStream origin = null;
            FileOutputStream dest = new FileOutputStream(zipFileName);
            ZipOutputStream out = new ZipOutputStream(new BufferedOutputStream(
                    dest));
            byte data[] = new byte[BUFFER_SIZE];

            for (int i = 0; i < _files.length; i++) {
                Log.e("Compress", "Adding: " + _files[i]);
                FileInputStream fi = new FileInputStream(_files[i]);
                origin = new BufferedInputStream(fi, BUFFER_SIZE);

                ZipEntry entry = new ZipEntry(_files[i].getName().substring(_files[i].getName().lastIndexOf("/") + 1));
                out.putNextEntry(entry);
                int count;

                while ((count = origin.read(data, 0, BUFFER_SIZE)) != -1) {
                    out.write(data, 0, count);
                }
                origin.close();
            }
            out.close();
            createdZip = true;
        } catch (Exception e) {
            e.printStackTrace();
            createdZip = false;
        }
        return createdZip;
    }

    public void shareSubjectFolder(SubjectModel subjectModel) {
        File[] ChaptersInSubject = subjectModel.getFile().listFiles();
        if (zip(ChaptersInSubject, subjectModel.getFile().getAbsolutePath() + ".zip")) {
            Toast.makeText(this, subjectModel.getFile().getName() + ".zip created", Toast.LENGTH_LONG).show();
            mTempZipFile = new File(subjectModel.getFile().getAbsolutePath() + ".zip");
            Uri photoURI = FileProvider.getUriForFile(this,
                    getApplicationContext().getPackageName() + ".provider",
                    mTempZipFile);
            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_STREAM, photoURI);
            sendIntent.setType("application/zip");
            startActivity(sendIntent);
        } else {
            Toast.makeText(this, ".Zip creation failed !!", Toast.LENGTH_LONG).show();
        }
    }
}