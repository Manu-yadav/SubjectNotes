package com.example.subjectnotes.activites;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.example.subjectnotes.R;

public abstract class BaseActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    abstract void initView();
    abstract void initVariables();
}