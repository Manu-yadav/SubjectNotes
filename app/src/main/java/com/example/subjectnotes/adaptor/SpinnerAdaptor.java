package com.example.subjectnotes.adaptor;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.subjectnotes.R;
import com.example.subjectnotes.models.SubjectModel;

import java.util.ArrayList;

public class SpinnerAdaptor extends ArrayAdapter<SubjectModel> {

    public SpinnerAdaptor(Context context,
                          ArrayList<SubjectModel> subjectModelsList) {
        super(context, 0, subjectModelsList);

    }

    @NonNull
    @Override
    public View getView(int position, @Nullable
            View convertView, @NonNull ViewGroup parent) {
        return initView(position, convertView, parent);
    }

    @Override
    public View getDropDownView(int position, @Nullable
            View convertView, @NonNull ViewGroup parent) {
        return initView(position, convertView, parent);
    }

    private View initView(int position, View convertView,
                          ViewGroup parent) {
        // It is used to set our custom view.
        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.simple_spinner_item, parent, false);
        }

        TextView textViewName = convertView.findViewById(R.id.file_name_tv);
        SubjectModel currentItem = getItem(position);

        // It is used the name to the TextView when the
        // current item is not null.
        if (currentItem != null) {
            textViewName.setText(currentItem.getFileName());
        }
        return convertView;
    }
}
