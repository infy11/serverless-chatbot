package com.gfx.college_chatbot;

import android.net.Uri;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import org.w3c.dom.Text;

public class MyAdapter extends RecyclerView.Adapter<MyAdapter.ViewHolder> {
    private Uri[] mDataset;

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v =  LayoutInflater.from(parent.getContext())
                .inflate(R.layout.recycletextview, parent, false);

        ViewHolder vh = new ViewHolder(v);
        return vh;
    }
    public MyAdapter(Uri[] myDataset) {
        mDataset = myDataset;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        final ImageRequest imageRequest =
                ImageRequestBuilder.newBuilderWithSource(mDataset[position])
                        .build();
        holder.draweeView.setImageRequest(imageRequest);


    }

    @Override
    public int getItemCount() {
        return mDataset.length;
    }

    static class ViewHolder extends RecyclerView.ViewHolder {
        private SimpleDraweeView draweeView;

        public ViewHolder(View v) {
            super(v);
            draweeView = v.findViewById(R.id.my_image_view);

        }
    }
}