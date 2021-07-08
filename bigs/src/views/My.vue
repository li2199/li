<template>
    <div>
    <Header></Header>
    <Banner></Banner>
    <Nav></Nav>
    <Nav1></Nav1>
    <Footer></Footer>
    </div>
</template>
<script>
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Nav1 from "@/components/Nav1";
import Footer from "@/components/Footer";
export default {
    components:{
        Footer,Nav,Header,Banner,Nav1 
    }
}
</script>
