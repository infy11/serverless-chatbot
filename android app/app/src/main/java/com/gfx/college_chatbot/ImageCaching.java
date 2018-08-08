package com.gfx.college_chatbot;

import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;


import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;

public class ImageCaching extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_image_caching);
        Fresco.initialize(this);

        mRecyclerView = (RecyclerView) findViewById(R.id.my_recycler_view);

        // use this setting to improve performance if you know that changes
        // in content do not change the layout size of the RecyclerView
        mRecyclerView.setHasFixedSize(true);

        // use a linear layout manager
        mLayoutManager = new LinearLayoutManager(this,LinearLayoutManager.HORIZONTAL, false);
        mRecyclerView.setLayoutManager(mLayoutManager);
        Uri uri1 = Uri.parse("https://ims-ghaziabad.ac.in/images/gallery/1496142109Koala.jpg");
        Uri uri2 = Uri.parse("https://ims-ghaziabad.ac.in/images/gallery/1496149420dheeraj.jpg");
        Uri uri3=Uri.parse("https://ims-ghaziabad.ac.in/images/gallery/1496149448ANR-hired-mca-imsgzb-may24.jpg");
        Uri uri4=Uri.parse("https://ims-ghaziabad.ac.in/images/gallery/14962306552.jpg");
        Uri uri5=Uri.parse("https://ims-ghaziabad.ac.in/images/gallery/1496142150Penguins.jpg");
        Uri uri6=Uri.parse("https://ims-ghaziabad.ac.in/images/event/1496149641Chrysanthemum.jpg");
        Uri uri7=Uri.parse("https://ims-ghaziabad.ac.in/images/slider/1475673097jbs-campus.jpg");





        Uri [] mdataset={uri1,uri2,uri3,uri4,uri5,uri6,uri7};

        // specify an adapter (see also next example)

        mAdapter = new MyAdapter(mdataset);
        mRecyclerView.setAdapter(mAdapter);

       // SimpleDraweeView draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
        //draweeView.setImageURI(uri);
    }
}
