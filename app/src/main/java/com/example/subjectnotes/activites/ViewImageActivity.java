package com.example.subjectnotes.activites;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.Environment;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;

import androidx.appcompat.widget.Toolbar;

import com.example.subjectnotes.R;
import com.example.subjectnotes.models.ChapterModel;
import com.example.subjectnotes.utils.Constants;
import com.tom_roush.pdfbox.io.MemoryUsageSetting;
import com.tom_roush.pdfbox.multipdf.PDFMergerUtility;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

public class ViewImageActivity extends BaseActivity {

    private Toolbar mToolbar;
    private File mFile;
    private String mFileName;
    private String mFilePath;
    private ImageView mContentIV;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_image);
        initView();
        initVariables();
    }

    @Override
    void initView() {
        mToolbar = (Toolbar) findViewById(R.id.tool);
        mContentIV = (ImageView) findViewById(R.id.iv_content);
    }

    @Override
    void initVariables() {
        Intent intent = getIntent();
        if (intent != null) {
            ArrayList<ChapterModel> chapterModelList = (ArrayList<ChapterModel>) intent.getSerializableExtra(Constants.IMAGE_OBJ);
           loadInWebView(chapterModelList);
        }
        setToolbar(mToolbar, mFileName);

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
        toolbar.setTitle(title);
    }

    private File getMergePDFFile(ArrayList<ChapterModel> chapterModels) {
        //Creating destination file.
        File destinationFile = null;
        String state = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            destinationFile = new File(chapterModels.get(0).getParentFile(), "merged_file.pdf");
        } else {
            destinationFile = new File(this.getFilesDir(), "merged_file.pdf");
        }
        if(destinationFile.exists()){
            destinationFile.delete();
        }
        PDFMergerUtility PDFmerger = new PDFMergerUtility();
        for (ChapterModel chapterModel: chapterModels) {
            try {
                //adding the source files
                if(!chapterModel.getmImageFile().getName().equals("merged_file.pdf")){
                    PDFmerger.addSource(chapterModel.getmImageFile());
                }
                final FileOutputStream fileOutputStream = new FileOutputStream(destinationFile);
                PDFmerger.setDestinationStream(fileOutputStream);
                PDFmerger.mergeDocuments(MemoryUsageSetting.setupTempFileOnly());
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e){
                e.printStackTrace();
            }
        }
        return destinationFile;
    }

    private void loadInWebView(ArrayList<ChapterModel> chapterModel){
        final ProgressDialog pDialog = new ProgressDialog(this);
        pDialog.setTitle(this.getString(R.string.app_name));
        pDialog.setMessage("Loading...");
        pDialog.setIndeterminate(false);
        pDialog.setCancelable(false);
        WebView webView = (WebView) findViewById(R.id.web_view);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setSupportZoom(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                pDialog.show();
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                pDialog.dismiss();
            }
        });
        webView.loadUrl("file:///android_asset/pdfjs/web/viewer.html?file=" + getMergePDFFile(chapterModel) + "#zoom=page-width");
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
    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }

}