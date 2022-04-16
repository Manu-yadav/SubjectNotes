package com.example.subjectnotes.appDialog;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.drawable.ColorDrawable;
import android.view.View;
import android.view.Window;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;

import com.example.subjectnotes.R;
import com.example.subjectnotes.activites.ChapterActivity;
import com.example.subjectnotes.activites.MainActivity;
import com.example.subjectnotes.activites.SubjectActivity;
import com.example.subjectnotes.models.ChapterModel;
import com.example.subjectnotes.models.SubjectModel;

import java.io.File;


/**
 * Created by madstech on 2/11/17.
 */

public class AppDialog {

/*    public static Dialog progressDialog(Context context, String msg, boolean isCancle) {
        ProgressDialog pd = new ProgressDialog(context);
        pd.setCancelable(isCancle);
        pd.setMessage(msg);
        return pd;
    }*/

    public static Dialog showProgressDialog(Activity activity, boolean isCancelable) {

        Dialog progressDialog = new Dialog(activity);
        progressDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        progressDialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        //((ProgressBar) progressDialog.findViewById(R.id.progress_loading)).getIndeterminateDrawable().setColorFilter(Color.WHITE, PorterDuff.Mode.MULTIPLY);
        progressDialog.setCancelable(isCancelable);
        return progressDialog;
    }


    public static Dialog showMsgDialog(final Activity activity, boolean isCancelable) {
        final Dialog progressDialog = new Dialog(activity);
        progressDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        progressDialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        progressDialog.setContentView(R.layout.dialog_message_custom);
        progressDialog.setCancelable(isCancelable);
        TextView titleTV = (TextView) progressDialog.findViewById(R.id.tv_title);
        EditText subjectNameET = (EditText) progressDialog.findViewById(R.id.et_subject_name);
        if (activity instanceof MainActivity) {
            titleTV.setText("Add Subject:");
            subjectNameET.setHint("Enter subject name");
        } else if (activity instanceof SubjectActivity) {
            titleTV.setText("Add Chapter:");
            subjectNameET.setHint("Enter chapter name");
        }
        progressDialog.findViewById(R.id.tv_cancel).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressDialog.dismiss();
            }
        });
        progressDialog.findViewById(R.id.tv_ok).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (subjectNameET.getText().toString().trim().length() == 0) {
                    Toast.makeText(activity, "Enter subject name", Toast.LENGTH_SHORT).show();
                } else {
                    if (activity instanceof MainActivity) {
                        ((MainActivity) activity).createSubjectFolder(subjectNameET.getText().toString());
                    } else if (activity instanceof SubjectActivity) {
                        ((SubjectActivity) activity).createChapterFolder(subjectNameET.getText().toString());
                    }
                    progressDialog.dismiss();
                }
            }
        });
        return progressDialog;
    }

    public static Dialog showCamDialog(final Activity activity, boolean isCancelable) {
        final Dialog progressDialog = new Dialog(activity);
        progressDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        progressDialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        progressDialog.setContentView(R.layout.cam_dialog);
        progressDialog.setCancelable(isCancelable);
        TextView cam = progressDialog.findViewById(R.id.tv_cam);
        cam.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((ChapterActivity) activity).dispatchTakePictureIntent();
                progressDialog.dismiss();
            }
        });
        TextView gallery = progressDialog.findViewById(R.id.tv_gallery);
        gallery.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((ChapterActivity) activity).dispatchSelectGalleryIntent();
                progressDialog.dismiss();
            }
        });


        progressDialog.findViewById(R.id.tv_cancel).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressDialog.dismiss();
            }
        });
        progressDialog.findViewById(R.id.tv_ok).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                progressDialog.dismiss();
            }
        });
        return progressDialog;
    }


    public static void ChangePassDialog(final Context context, String msg) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {


                    }
                })
                /*  .setNegativeButton("No", new DialogInterface.OnClickListener()
                  {
                      public void onClick(DialogInterface dialog, int id)
                      {
                          Toast.makeText(context,"yes",Toast.LENGTH_SHORT).show();
                      }
                  })*/
                //Set your icon here
                .setTitle("UZAutoTrans :")
                .setMessage(msg);
        AlertDialog alert = builder.create();
        alert.show();//showing the dialog
    }


    public static void alertDialogForSubjectDelete(Context context, SubjectModel subjectModel, String title) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("DELETE", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        if (context instanceof MainActivity) {
                            ((MainActivity) context).deleteFolder(subjectModel);
                        } else if (context instanceof SubjectActivity) {
                            ((SubjectActivity) context).deleteFolder(subjectModel);
                        }
                    }
                })
                .setNegativeButton("CANCEL", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        dialog.dismiss();
                    }
                })
                .setTitle(title)
                .setMessage("Do You Want Delete " + subjectModel.getFileName() + "?");
        AlertDialog alert = builder.create();
        alert.show();
    }

    public static void alertDialogForChapterContentDelete(Context context, ChapterModel chapterModel, String title) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("DELETE", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                            ((ChapterActivity) context).deleteFile(chapterModel);
                    }
                })
                .setNegativeButton("CANCEL", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        dialog.dismiss();
                    }
                })
                .setTitle("Delete !!")
                .setMessage("Do You Want Delete " + chapterModel.getmImageFile().getName() + "?");
        AlertDialog alert = builder.create();
        alert.show();
    }
    public static void showSettingAlertDialog(final Context context) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("Setting", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                     /*   if (context instanceof MapActivity)
                        {
                            Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                            ( (MapActivity) context).startActivityForResult(intent,AppConstants.REQUEST_CODE_FOR_GPS);
                            Log.e("GPS_dialog","Map_activity");
                        } else if (context instanceof ActiviOrderDetailActivity)
                        {
                            Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                            ( (ActiviOrderDetailActivity) context).startActivityForResult(intent,AppConstants.REQUEST_CODE_FOR_GPS);
                            Log.e("GPS_dialog","Active_order_detail");
                        }

*/

                    }
                })
                /*  .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                      public void onClick(DialogInterface dialog, int id) {
                          ((MainActivity) context).gpsDialogCancled();
                          dialog.dismiss();
                      }
                  })*/
                //Set your icon here
                .setTitle("GPS setting !")
                .setMessage("GPS is not enabled. do you want to go to settings menu? ");
        AlertDialog alert = builder.create();
        alert.show();//showing the dialog

    }

    public static void showLogoutAlertDialog(final Context context) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("Logout", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {

                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        dialog.dismiss();
                    }
                })
                //Set your icon here
                .setTitle("Logout !")
                .setMessage("Are you sure you want to logout?");
        AlertDialog alert = builder.create();
        alert.show();//showing the dialog

    }


    public static void showMatchOverAlertDialog(final Context context) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setCancelable(false)
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        dialog.dismiss();
                    }
                })
                /*   .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                       public void onClick(DialogInterface dialog, int id) {
                           dialog.dismiss();
                       }
                   })*/
                //Set your icon here
                .setTitle("Alert !")
                .setMessage("Match Closed");
        AlertDialog alert = builder.create();
        try {
            alert.show();//showing the dialog
        } catch (Exception e) {
        }

    }
}
