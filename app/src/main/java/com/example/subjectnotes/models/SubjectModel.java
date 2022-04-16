package com.example.subjectnotes.models;

import java.io.File;
import java.io.Serializable;

public class SubjectModel implements Serializable {

    private File mFile;
    private String mFileName;
    private String mFilePath;
    private File mParentFile;

    public SubjectModel() {
    }


    public File getFile() {
        return mFile;
    }

    public void setFile(File file) {
        this.mFile = file;
    }

    public String getFileName() {
        return mFileName;
    }

    public void setFileName(String fileName) {
        this.mFileName = fileName;
    }

    public String getFilePath() {
        return mFilePath;
    }

    public void setFilePath(String filePath) {
        this.mFilePath = filePath;
    }

    public File getParentFile() {
        return mParentFile;
    }

    public void setParentFile(File filePath) {
        this.mParentFile = filePath;
    }
}
