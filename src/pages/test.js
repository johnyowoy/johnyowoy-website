import React from 'react';
import Layout from '@theme/Layout';

export default function IT_ArticleSharing() {
    return (
        <Layout title="文章分享" description="Hello Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    edit <code>System.out.println("")</code> and save to reload.
                </p>
            </div>
        </Layout>
    );
}