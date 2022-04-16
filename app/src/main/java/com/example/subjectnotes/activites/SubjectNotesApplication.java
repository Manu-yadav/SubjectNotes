package com.example.subjectnotes.activites;

import android.app.Application;
import android.content.Context;

import com.example.subjectnotes.appPrefrences.AppPreference;

public class SubjectNotesApplication extends Application {

    @Override
    public void onCreate() {
        AppPreference.INSTANCE.initSharedPreference(this);
        super.onCreate();
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
//        MultiDex.install(this);
    }

    @Override
    public void onTerminate() {
        super.onTerminate();
    }

}
