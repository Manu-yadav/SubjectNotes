package com.example.subjectnotes.activites;

import android.Manifest;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Environment;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.subjectnotes.R;
import com.example.subjectnotes.adaptor.CustomAdapter;
import com.example.subjectnotes.appDialog.AppDialog;
import com.example.subjectnotes.models.SubjectModel;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.io.File;
import java.util.ArrayList;

public class MainActivity extends BaseActivity {
    private TextView mNoSubjectFoundTV;
    private Toolbar mToolbar;
    String[] permissionsRequired = new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.CAMERA};
    private static final int PERMISSION_CALLBACK_CONSTANT = 1000;
    private String mParentSubjectDirectoryName = "/Subject_Notes";
    private File mParentDir;
    private FloatingActionButton mAddSubjectButton;
    private RecyclerView mSubjectRV;
    private ArrayList<SubjectModel> mSubjectList;
    private CustomAdapter mCustomAdaptor;
    private EditText mSearchET;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
        initVariables();
    }

    @Override
    void initView() {
        mToolbar = (Toolbar) findViewById(R.id.tool);
        setToolbar(mToolbar, "Subjects");
        mNoSubjectFoundTV = (TextView) findViewById(R.id.tv_no_subject);
        mAddSubjectButton = findViewById(R.id.fab_add_subject);
        mSubjectRV = (RecyclerView) findViewById(R.id.rv_subjects);
        mSearchET = (EditText) findViewById(R.id.et_search);
    }

    @Override
    void initVariables() {
        mSubjectList = new ArrayList<>();
        mCustomAdaptor = new CustomAdapter(this, mSubjectList);
        GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 3);
        mSubjectRV.setLayoutManager(gridLayoutManager);
        mSubjectRV.setAdapter(mCustomAdaptor);
        checkRuntimeMultiplePermission();
        checkForAlreadyAddedSubjects();
        mAddSubjectButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AppDialog.showMsgDialog(MainActivity.this, false).show();
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
    }

    private void checkForAlreadyAddedSubjects() {
        mParentDir = new File(Environment.getExternalStorageDirectory().toString() + mParentSubjectDirectoryName);
        if (mParentDir.exists()) {
            File[] subjects = mParentDir.listFiles();
            if (subjects.length > 0) {
                mNoSubjectFoundTV.setVisibility(View.GONE);
                for (int i = 0; i < subjects.length; i++) {
                    SubjectModel subjectModel = new SubjectModel();
                    subjectModel.setFile(subjects[i]);
                    subjectModel.setFileName(subjects[i].getName());
                    subjectModel.setFilePath(subjects[i].getAbsolutePath());
                    subjectModel.setParentFile(mParentDir);
                    mSubjectList.add(subjectModel);
                }
                mCustomAdaptor.notifyDataSetChanged();
            } else {
                mNoSubjectFoundTV.setVisibility(View.VISIBLE);
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
        //toolbar.setTitleTextAppearance(this, R.style.proxima_nova_semibold);
        toolbar.setTitle(title);
    }

    private void checkRuntimeMultiplePermission() {
        if (ActivityCompat.checkSelfPermission(this, permissionsRequired[0]) != PackageManager.PERMISSION_GRANTED
                || ActivityCompat.checkSelfPermission(this, permissionsRequired[1]) != PackageManager.PERMISSION_GRANTED
                || ActivityCompat.checkSelfPermission(this, permissionsRequired[2]) != PackageManager.PERMISSION_GRANTED
        ) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[0])
                    || ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[1])
                    || ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[2])
            ) {
                //Show Information about why you need the permission
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setTitle("Need Multiple Permissions");
                builder.setMessage("This app needs Storage permission.");
                builder.setPositiveButton("Grant", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                        ActivityCompat.requestPermissions(MainActivity.this, permissionsRequired, PERMISSION_CALLBACK_CONSTANT);
                    }
                });
                builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });
                builder.show();
            } else {
                //just request the permission
                ActivityCompat.requestPermissions(this, permissionsRequired, PERMISSION_CALLBACK_CONSTANT);
            }

        } else {
            //You already have the permission, just go ahead.
            proceedAfterPermission();
        }

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == PERMISSION_CALLBACK_CONSTANT) {
            //check if all permissions are granted
            boolean allgranted = false;
            for (int i = 0; i < grantResults.length; i++) {
                if (grantResults[i] == PackageManager.PERMISSION_GRANTED) {
                    allgranted = true;
                } else {
                    allgranted = false;
                    break;
                }
            }

            if (allgranted) {
                proceedAfterPermission();
            } else if (ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[0])
                    || ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[1])
                    || ActivityCompat.shouldShowRequestPermissionRationale(this, permissionsRequired[2])
            ) {
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setTitle("Need Multiple Permissions");
                builder.setMessage("This app needs Read and Write Storage permission.");
                builder.setPositiveButton("Grant", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                        ActivityCompat.requestPermissions(MainActivity.this, permissionsRequired, PERMISSION_CALLBACK_CONSTANT);
                    }
                });
                builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });
                builder.show();
            } else {
                Toast.makeText(getBaseContext(), "Unable to get Permission", Toast.LENGTH_LONG).show();
            }
        }
    }

    private void proceedAfterPermission() {

    }

    public void createSubjectFolder(String subjectName) {
        String state = Environment.getExternalStorageState();
        mParentDir = new File(Environment.getExternalStorageDirectory().toString() + mParentSubjectDirectoryName);
        if (!mParentDir.exists()) {
            mParentDir.mkdir();
        }
        File currentFile = null;
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            currentFile = new File(mParentDir.toString(), subjectName);
        } else {
            currentFile = new File(this.getFilesDir(), subjectName);
        }
        if (currentFile.mkdir()) {
            SubjectModel subjectModel = new SubjectModel();
            subjectModel.setParentFile(mParentDir);
            subjectModel.setFile(currentFile);
            subjectModel.setFilePath(currentFile.getAbsolutePath());
            subjectModel.setFileName(currentFile.getName());
            mSubjectList.add(subjectModel);
            mCustomAdaptor.notifyDataSetChanged();
            mNoSubjectFoundTV.setVisibility(View.GONE);
            Toast.makeText(this, "Subject created", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(this, "Subject Already Exits", Toast.LENGTH_SHORT).show();
        }
    }

    public void deleteFolder(SubjectModel subjectModel) {
        //to end the recursive loop
        delete(subjectModel.getFile());
        mSubjectList.remove(subjectModel);
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
}