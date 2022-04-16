package com.example.subjectnotes.adaptor;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.example.subjectnotes.R;
import com.example.subjectnotes.activites.ChapterActivity;
import com.example.subjectnotes.activites.MainActivity;
import com.example.subjectnotes.activites.SubjectActivity;
import com.example.subjectnotes.utils.Constants;
import com.example.subjectnotes.appDialog.AppDialog;
import com.example.subjectnotes.models.SubjectModel;

import java.util.ArrayList;
import java.util.List;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.MyViewHolder> implements Filterable {
    Context mContext;
    ArrayList<SubjectModel> mSubjectList;
    ArrayList<SubjectModel> mSubjectListFiltered;

    public CustomAdapter(Context context, ArrayList<SubjectModel> subjectList) {
        this.mContext = context;
        this.mSubjectList = subjectList;
        this.mSubjectListFiltered = subjectList;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.child_view, parent, false);
        return new MyViewHolder(v);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        holder.subjectName.setText(mSubjectListFiltered.get(position).getFileName());
    }

    @Override
    public int getItemCount() {
        return mSubjectListFiltered.size();
    }

    @Override
    public Filter getFilter() {
        return new Filter() {
            @Override
            protected FilterResults performFiltering(CharSequence charSequence) {
                String charString = charSequence.toString();
                if (charString.isEmpty()) {
                    mSubjectListFiltered = mSubjectList;
                } else {

                    ArrayList<SubjectModel> filteredList = new ArrayList<>();
                    for (SubjectModel model : mSubjectList) {

                        // name match condition. this might differ depending on your requirement
                        // here we are looking for name or phone number match
                        if (model.getFileName().toLowerCase().contains(charString.toLowerCase())) {
                            filteredList.add(model);
                        }
                    }
                    mSubjectListFiltered = filteredList;
                }

                FilterResults filterResults = new FilterResults();
                filterResults.values = mSubjectListFiltered;
                return filterResults;
            }

            @Override
            protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
                mSubjectListFiltered = (ArrayList<SubjectModel>) filterResults.values;
                notifyDataSetChanged();
            }
        };
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        TextView subjectName;

        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            subjectName = (TextView) itemView.findViewById(R.id.tv_subject_name);
            ((ImageView) itemView.findViewById(R.id.iv_delete)).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (mContext instanceof MainActivity) {
                        AppDialog.alertDialogForSubjectDelete(mContext, mSubjectList.get(getAbsoluteAdapterPosition()), "Delete Subject !!");
                    } else {
                        AppDialog.alertDialogForSubjectDelete(mContext, mSubjectList.get(getAbsoluteAdapterPosition()), "Delete Chapter !!");
                    }
                }
            });
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (mContext instanceof MainActivity) {
                        Intent intent = new Intent(mContext, SubjectActivity.class);
                        intent.putExtra(Constants.SUBJECT_OBJ, mSubjectList.get(getAbsoluteAdapterPosition()));
                        mContext.startActivity(intent);
                    } else if (mContext instanceof SubjectActivity) {
                        Intent intent = new Intent(mContext, ChapterActivity.class);
                        intent.putExtra(Constants.CHAPTER_OBJ, mSubjectList.get(getAbsoluteAdapterPosition()));
                        mContext.startActivity(intent);
                    }
                }
            });
        }
    }
}