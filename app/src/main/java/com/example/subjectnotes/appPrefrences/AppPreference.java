package com.example.subjectnotes.appPrefrences;

import android.content.Context;
import android.content.SharedPreferences;

public enum AppPreference {
    INSTANCE;
    private static final String AppPreferenceName = "com.subjectNotes";
    SharedPreferences mSharedPref;
    SharedPreferences.Editor mEditor;


    public void initSharedPreference(Context context) {
        mSharedPref = context.getSharedPreferences(AppPreferenceName, Context.MODE_PRIVATE);
        mEditor = mSharedPref.edit();
    }

    public boolean isLogin() {
        return mSharedPref.getBoolean(SharedPreferencesKeys.isLogin.toString(), false);
    }

    public void setLoginstatus(boolean isLogin) {
        mEditor.putBoolean(SharedPreferencesKeys.isLogin.toString(), isLogin);
        mEditor.commit();
    }

    public boolean isFromBranch() {
        return mSharedPref.getBoolean(SharedPreferencesKeys.isFromBranch.toString(), false);
    }

    public void setisFromBranch(boolean isLogin) {
        mEditor.putBoolean(SharedPreferencesKeys.isFromBranch.toString(), isLogin);
        mEditor.commit();
    }


    public void setLoginType(String loginType) {
        mEditor.putString(SharedPreferencesKeys.loginType.toString(), loginType);
        mEditor.commit();

    }

    public String getLoginType() {
        return mSharedPref.getString(SharedPreferencesKeys.loginType.toString(), "");
    }

    public void setIpAddress(String loginType) {
        mEditor.putString(SharedPreferencesKeys.ip.toString(), loginType);
        mEditor.commit();

    }

    public String getIpAddress() {
        return mSharedPref.getString(SharedPreferencesKeys.ip.toString(), "");
    }


    public void setReferalCode(String referalcode) {
        mEditor.putString(SharedPreferencesKeys.referalcode.toString(), referalcode);
        mEditor.commit();

    }

    public String getReferalCode() {
        return mSharedPref.getString(SharedPreferencesKeys.referalcode.toString(), "");
    }

    public void setReferalBonus(String referalcode) {
        mEditor.putString(SharedPreferencesKeys.referal_bonus.toString(), referalcode);
        mEditor.commit();

    }

    public String getReferalBonus() {
        return mSharedPref.getString(SharedPreferencesKeys.referal_bonus.toString(), "");
    }


    public void setSignUpBonus(String referalcode) {
        mEditor.putString(SharedPreferencesKeys.signup_bonus.toString(), referalcode);
        mEditor.commit();

    }

    public String getSignUpBonus() {
        return mSharedPref.getString(SharedPreferencesKeys.signup_bonus.toString(), "");
    }


    public void clearPreferences() {
        mEditor.clear();
        mEditor.commit();
    }

    public String getAccessToken() {
        return mSharedPref.getString(SharedPreferencesKeys.accesstoken.toString(), "");
    }

    public void setAccessToken(String accessToken) {
        mEditor.putString(SharedPreferencesKeys.accesstoken.toString(), accessToken);
        mEditor.commit();

    }


    public String getUserNameEdited() {
        return mSharedPref.getString(SharedPreferencesKeys.username_edited.toString(), "");
    }

    public void setUserNameEdited(String accessToken) {
        mEditor.putString(SharedPreferencesKeys.username_edited.toString(), accessToken);
        mEditor.commit();

    }


    public void setFragmentselectedInProfile(String userName) {
        mEditor.putString(SharedPreferencesKeys.frag.toString(), userName);
        mEditor.commit();


    }

    public String getFragmentselectedInProfile() {
        return mSharedPref.getString(SharedPreferencesKeys.frag.toString(), "");
    }


    public void setUserName(String userName) {
        mEditor.putString(SharedPreferencesKeys.username.toString(), userName);
        mEditor.commit();

    }

    public String getUserName() {
        return mSharedPref.getString(SharedPreferencesKeys.username.toString(), "");
    }


    public void setUpdatedCurrentLat(String lat) {
        mEditor.putString(SharedPreferencesKeys.updated_currentLat.toString(), lat);
        mEditor.commit();

    }

    public String getUpdatedCurrentLat() {
        return mSharedPref.getString(SharedPreferencesKeys.updated_currentLat.toString(), "");
    }


    public void setUpdatedCurrentLong(String lng) {
        mEditor.putString(SharedPreferencesKeys.updated_currentlong.toString(), lng);
        mEditor.commit();

    }

    public String getUpdatedCurrentLong() {
        return mSharedPref.getString(SharedPreferencesKeys.updated_currentlong.toString(), "");
    }


    public void setCurrentLat(String lat) {
        mEditor.putString(SharedPreferencesKeys.currentLat.toString(), lat);
        mEditor.commit();

    }

    public String getCurrentLat() {
        return mSharedPref.getString(SharedPreferencesKeys.currentLat.toString(), "");
    }


    public void setCurrentLong(String lng) {
        mEditor.putString(SharedPreferencesKeys.currentlong.toString(), lng);
        mEditor.commit();

    }

    public String getCurrentLong() {
        return mSharedPref.getString(SharedPreferencesKeys.currentlong.toString(), "");
    }

    public void setAccountType(String accountType) {
        mEditor.putString(SharedPreferencesKeys.accountType.toString(), accountType);
        mEditor.commit();

    }

    public String getAccountType() {
        return mSharedPref.getString(SharedPreferencesKeys.accountType.toString(), "");
    }


    public void setMaxTeamClassic(int teamSize) {
        mEditor.putInt(SharedPreferencesKeys.max_team_classic.toString(), teamSize);
        mEditor.commit();

    }

    public int getMaxTeamClassic() {
        return mSharedPref.getInt(SharedPreferencesKeys.max_team_classic.toString(), 0);
    }


    public void setMaxTeamBatting(int teamSizeOther) {
        mEditor.putInt(SharedPreferencesKeys.max_team_batting.toString(), teamSizeOther);
        mEditor.commit();

    }

    public int getMaxTeamBatting() {
        return mSharedPref.getInt(SharedPreferencesKeys.max_team_batting.toString(), 0);
    }


    public void setMaxTeamBowling(int teamSizeOther) {
        mEditor.putInt(SharedPreferencesKeys.max_team_bowling.toString(), teamSizeOther);
        mEditor.commit();

    }

    public int getMaxTeamBowling() {
        return mSharedPref.getInt(SharedPreferencesKeys.max_team_bowling.toString(), 0);
    }


    public void setUserID(String userID) {
        mEditor.putString(SharedPreferencesKeys.userID.toString(), userID);
        mEditor.commit();

    }

    public String getUserID() {
        return mSharedPref.getString(SharedPreferencesKeys.userID.toString(), "");
    }


    public String getUserEmail() {
        return mSharedPref.getString(SharedPreferencesKeys.userEmail.toString(), "");
    }

    public void setUserEmail(String email) {
        mEditor.putString(SharedPreferencesKeys.userEmail.toString(), email);
        mEditor.commit();
    }

    public String getUserPass() {
        return mSharedPref.getString(SharedPreferencesKeys.pass.toString(), "");
    }

    public void setUserPass(String pass) {
        mEditor.putString(SharedPreferencesKeys.pass.toString(), pass);
        mEditor.commit();
    }

    public void setUserPhone(String phone) {
        mEditor.putString(SharedPreferencesKeys.phone.toString(), phone);
        mEditor.commit();
    }

    public String getUserPhone() {
        return mSharedPref.getString(SharedPreferencesKeys.phone.toString(), "");
    }

    public void setReferralCode(String referralCode) {
        mEditor.putString(SharedPreferencesKeys.referal_code.toString(), referralCode);
        mEditor.commit();
    }

    public String setReferralCode() {
        return mSharedPref.getString(SharedPreferencesKeys.referal_code.toString(), "");
    }


    public void setThisUserInfo(String thisUserInfo) {
        mEditor.putString(SharedPreferencesKeys.this_user.toString(), thisUserInfo);
        mEditor.commit();

    }

    public String getThisUserInfo() {
        return mSharedPref.getString(SharedPreferencesKeys.this_user.toString(), "");
    }


    public void setDefaultAmount(String thisUserInfo) {
        mEditor.putString(SharedPreferencesKeys.amount.toString(), thisUserInfo);
        mEditor.commit();

    }

    public String getDefaultAmount() {
        return mSharedPref.getString(SharedPreferencesKeys.amount.toString(), "");
    }


    public void setCancelWithdrawID(String amount) {
        mEditor.putString(SharedPreferencesKeys.cancel_withdraw.toString(), amount);
        mEditor.commit();

    }

    public String getCancelWithdrawID() {
        return mSharedPref.getString(SharedPreferencesKeys.cancel_withdraw.toString(), "");
    }


    public void setAPISecretKEY(String secretKEY) {
        mEditor.putString(SharedPreferencesKeys.secret_key.toString(), secretKEY);
        mEditor.commit();
    }

    public String getAPISecretKey() {
        return mSharedPref.getString(SharedPreferencesKeys.secret_key.toString(), "");
    }

    public void setLeagueSelectedTab(String type) {
        mEditor.putString(SharedPreferencesKeys.selected_tab.toString(), type);
        mEditor.commit();
    }

    public String getLeagueSelectedTab() {
        return mSharedPref.getString(SharedPreferencesKeys.selected_tab.toString(), "");
    }

    public void setClosingTime(String closingTime) {
        mEditor.putString(SharedPreferencesKeys.closing_ts.toString(), closingTime);
        mEditor.commit();
    }

    public String getClosingTime() {
        return mSharedPref.getString(SharedPreferencesKeys.closing_ts.toString(), "");
    }

    public void setPrivateLeagueCreated(boolean privateLeagueCreated) {
        mEditor.putBoolean(SharedPreferencesKeys.private_league_created.toString(), privateLeagueCreated);
        mEditor.commit();
    }

    public boolean getPrivateLeagueCreated() {
        return mSharedPref.getBoolean(SharedPreferencesKeys.private_league_created.toString(), false);
    }

    public void setUpdateDuration(long milliSec) {
        mEditor.putLong(SharedPreferencesKeys.cur_millisec.toString(), milliSec);
        mEditor.commit();
    }

    public long getUpdateDuration() {
        return mSharedPref.getLong(SharedPreferencesKeys.cur_millisec.toString(), 00);
    }

    public void setCurrentTimeJoinedLeague(long milliSec) {
        mEditor.putLong(SharedPreferencesKeys.cur_millisec_joined_league.toString(), milliSec);
        mEditor.commit();
    }

    public long getCurrentTimeJoinedLeague() {
        return mSharedPref.getLong(SharedPreferencesKeys.cur_millisec_joined_league.toString(), 00);
    }

    public void setBonus(float bonus) {
        mEditor.putFloat(SharedPreferencesKeys.bonus.toString(), bonus);
        mEditor.commit();
    }

    public float getBonus() {
        return mSharedPref.getFloat(SharedPreferencesKeys.bonus.toString(), 00);
    }

    public void setDeviceID(String deviceID) {
        mEditor.putString(SharedPreferencesKeys.device_id.toString(), deviceID);
        mEditor.commit();
    }

    public String getDeviceID() {
        return mSharedPref.getString(SharedPreferencesKeys.device_id.toString(), "");
    }

    public void setRefreshedToken(String token) {
        mEditor.putString(SharedPreferencesKeys.refreshed_token.toString(), token);
        mEditor.commit();
    }

    public String getRefreshedToken() {
        return mSharedPref.getString(SharedPreferencesKeys.refreshed_token.toString(), "");
    }

    public void setFromReferAndEarn(boolean from) {
        mEditor.putBoolean(SharedPreferencesKeys.refer_earn.toString(), from);
        mEditor.commit();
    }

    public boolean isFromReferAndEarn() {
        return mSharedPref.getBoolean(SharedPreferencesKeys.refer_earn.toString(), false);
    }


    public enum SharedPreferencesKeys {
        isLogin,
        accesstoken,
        username_edited,
        username,
        frag,
        accountType,
        userID,
        status, userEmail, pass, phone, orderid, currentLat, currentlong, updated_currentLat, updated_currentlong,
        referal_code,
        this_user,
        amount, cancel_withdraw,
        secret_key,
        selected_tab,
        closing_ts,
        max_team_classic,
        max_team_batting,
        max_team_bowling,
        refer_earn,
        app_count,
        private_league_created, isFromBranch, ip, loginType, referalcode, referal_bonus, signup_bonus, cur_millisec, bonus, device_id, refreshed_token, cur_millisec_joined_league
    }

}
