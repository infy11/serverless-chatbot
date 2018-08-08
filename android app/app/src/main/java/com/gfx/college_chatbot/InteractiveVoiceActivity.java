package com.gfx.college_chatbot;


import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.amazonaws.auth.CognitoCredentialsProvider;
import com.amazonaws.mobile.client.AWSMobileClient;
import com.amazonaws.mobileconnectors.lex.interactionkit.Response;
import com.amazonaws.mobileconnectors.lex.interactionkit.config.InteractionConfig;
import com.amazonaws.mobileconnectors.lex.interactionkit.ui.InteractiveVoiceView;
import com.amazonaws.regions.Regions;
import com.amazonaws.util.StringUtils;

import java.util.Locale;
import java.util.Map;

public class InteractiveVoiceActivity extends Activity {
    private static final String TAG = "VoiceActivity";
    private Context appContext;
    private InteractiveVoiceView voiceView;
    private TextView transcriptTextView;
    private TextView responseTextView;

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_interactive_voice);
        transcriptTextView = (TextView) findViewById(R.id.transcriptTextView);
        responseTextView = (TextView) findViewById(R.id.responseTextView);
        init();
        StringUtils.isBlank("notempty");
    }

    @Override
    public void onBackPressed() {
        exit();
    }

    private void exit() {
        finish();
    }


    public void init(){
        InteractiveVoiceView voiceView =
                (InteractiveVoiceView) findViewById(R.id.voiceInterface);

        voiceView.setInteractiveVoiceListener(
                new InteractiveVoiceView.InteractiveVoiceListener() {

                    @Override
                    public void dialogReadyForFulfillment(Map slots, String intent) {
                      //  responseTextView.setText(slots.toString()+intent);
                        //transcriptTextView.setText(slots.toString()+intent);
                        Log.d(TAG, String.format(
                                Locale.US,
                                "Dialog ready for fulfillment:\n\tIntent: %s\n\tSlots: %s",
                                intent,
                                slots.toString()));
                    }


                    @Override
                    public void onResponse(Response response) {
                        Log.d(TAG, "Bot response: " + response.getTextResponse());
                        responseTextView.setText(response.getTextResponse());
                        transcriptTextView.setText(response.getInputTranscript());
                    }

                    @Override
                    public void onError(String responseText, Exception e) {
                        Log.e(TAG, "Error: " + responseText, e);
                    }
                });

        voiceView.getViewAdapter().setCredentialProvider(AWSMobileClient.getInstance().getCredentialsProvider());

        //replace parameters with your botname, bot-alias
        voiceView.getViewAdapter()
                .setInteractionConfig(
                        new InteractionConfig("ScheduleAppointment","$LATEST"));

        voiceView.getViewAdapter()
                .setAwsRegion(getApplicationContext()
                        .getString(R.string.lex_region));
    }}



