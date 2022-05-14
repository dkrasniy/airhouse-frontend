import React from 'react'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'  

export default function ViewWordsView() { 
    return (
        <Layout>
            <PageLayout title={"View Words View"}>
            <h1>12 words</h1> 
             <div>
                 List of words
             </div> 
            </PageLayout>
        </Layout>)
}