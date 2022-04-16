package com.example.subjectnotes.models;

import android.graphics.Bitmap;

import java.io.File;
import java.io.Serializable;

public class ChapterModel implements Serializable {

    private File mImageFile;
    private String mImageFileName;
    private String mImageFilePath;
    private File mParentFile;

    public ChapterModel() {
    }


    public File getmImageFile() {
        return mImageFile;
    }

    public void setmImageFile(File file) {
        this.mImageFile = file;
    }

    public String getmImageFileName() {
        return mImageFileName;
    }

    public void setmImageFileName(String fileName) {
        this.mImageFileName = fileName;
    }

    public String getmImageFilePath() {
        return mImageFilePath;
    }

    public void setmImageFilePath(String filePath) {
        this.mImageFilePath = filePath;
    }

    public File getParentFile() {
        return mParentFile;
    }

    public void setParentFile(File filePath) {
        this.mParentFile = filePath;
    }
}
