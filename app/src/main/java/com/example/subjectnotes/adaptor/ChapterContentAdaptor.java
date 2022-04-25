package com.example.subjectnotes.adaptor;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.RecyclerView;

import com.example.subjectnotes.R;
import com.example.subjectnotes.activites.ViewImageActivity;
import com.example.subjectnotes.appDialog.AppDialog;
import com.example.subjectnotes.models.ChapterModel;
import com.example.subjectnotes.utils.Constants;
import com.shockwave.pdfium.PdfDocument;
import com.shockwave.pdfium.PdfiumCore;


import java.util.ArrayList;

public class ChapterContentAdaptor extends RecyclerView.Adapter<ChapterContentAdaptor.MyViewHolder> {
    Context mContext;
    ArrayList<ChapterModel> mChapterList;

    public ChapterContentAdaptor(Context context, ArrayList<ChapterModel> chapterList) {
        this.mContext = context;
        this.mChapterList = chapterList;
    }

    @Override
    public ChapterContentAdaptor.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.child_view_content, parent, false);
        return new ChapterContentAdaptor.MyViewHolder(v);
    }

    @Override
    public void onBindViewHolder(ChapterContentAdaptor.MyViewHolder holder, final int position) {
        holder.contentName.setText(mChapterList.get(position).getmImageFileName());
        Bitmap myBitmap = generateImageFromPdf(FileProvider.getUriForFile(mContext, mContext.getApplicationContext().getPackageName() + ".provider", mChapterList.get(position).getmImageFile()));
        holder.contentIV.setImageBitmap(myBitmap);
    }

    Bitmap generateImageFromPdf(Uri pdfUri) {
        int pageNumber = 0;
        PdfiumCore pdfiumCore = new PdfiumCore(mContext);
        Bitmap bmp = null;
        try {
            //http://www.programcreek.com/java-api-examples/index.php?api=android.os.ParcelFileDescriptor
            ParcelFileDescriptor fd = mContext.getContentResolver().openFileDescriptor(pdfUri, "r");
            PdfDocument pdfDocument = pdfiumCore.newDocument(fd);
            pdfiumCore.openPage(pdfDocument, pageNumber);
            int width = pdfiumCore.getPageWidthPoint(pdfDocument, pageNumber);
            int height = pdfiumCore.getPageHeightPoint(pdfDocument, pageNumber);
            Log.e("Width_height",""+width+" "+height);
            bmp = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
            pdfiumCore.renderPageBitmap(pdfDocument, bmp, pageNumber, 0, 0, width, height);
            pdfiumCore.closeDocument(pdfDocument); // important!
        } catch(Exception e) {
            //todo with exception
        }
        return bmp;
    }

    @Override
    public int getItemCount() {
        return mChapterList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private final ImageView contentIV;
        TextView contentName;

        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            contentIV = (ImageView) itemView.findViewById(R.id.iv_content);
            contentName = (TextView) itemView.findViewById(R.id.tv_content_name);
            ((ImageView) itemView.findViewById(R.id.iv_delete)).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                        AppDialog.alertDialogForChapterContentDelete(mContext, mChapterList.get(getAbsoluteAdapterPosition()), "Delete!!");
                }
            });
            ((ImageView) itemView.findViewById(R.id.iv_share)).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Uri photoURI = FileProvider.getUriForFile(mContext,
                            mContext.getApplicationContext().getPackageName() + ".provider",
                            mChapterList.get(getAbsoluteAdapterPosition()).getmImageFile());
                    Intent shareIntent = new Intent(Intent.ACTION_SEND);
                    shareIntent.setType("application/pdf");
                    shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    shareIntent.putExtra(Intent.EXTRA_STREAM, photoURI );
                    mContext.startActivity(Intent.createChooser(shareIntent, "Share it"));
                }
            });
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent(mContext, ViewImageActivity.class);
                    intent.putExtra(Constants.IMAGE_OBJ, mChapterList);
                    mContext.startActivity(intent);
                }
            });
        }
    }
}
