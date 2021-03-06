import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import {storage} from '../../firebase';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name: "",
            price: "",
            discount:"",
            description:"",
            service_category_id:"",
            vendor_id: "",
            User:[]
        }

        var retrievedData = localStorage.getItem("User");
        var user = JSON.parse(retrievedData);
        this.state.id = user[0].id;
        console.log(this.state.id);
        axios.get('admin_product/'+this.state.id)
        .then(res => {
            this.state.User = res.data
            this.state.service_category_id = this.state.User.service_category_id;
            this.state.vendor_id = this.state.User.vendor_id;
        })
        .catch((error) => {
        console.log(error);
        })

        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload = (e) => {
        const files = e.target.files[0]
        const uploadTask = storage.ref(`images/${files.name}`).put(files);
        uploadTask.on('state_changed', 
            () => {
            // complete function ....
            storage.ref('images').child(files.name).getDownloadURL().then(url => {
                this.state.picture = url;
                console.log("avatar:"+this.state.picture);
            })
        });    
    }

    submit = (event) => {
        event.preventDefault();
        let product = {
            name: this.state.name,
            picture: this.state.picture,
            price: this.state.price,
            discount: this.state.discount,
            description: this.state.description,
            service_category_id: this.state.service_category_id,
            vendor_id: this.state.vendor_id
        }
        console.log(product);

        axios.post('admin_product',product)
            .then(() => {
                alert("Th??m s???n ph???m th??nh c??ng!");
                this.props.history.push("/product");
            }).catch((error) => {
                alert("Vui l??ng ??i???n th??ng tin!");
                console.log(error);
            })
    }
  render() {
    return (
        <div className="container-scroller">
            <Header/>
            <div className="container-fluid page-body-wrapper">
                <SideBar/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">
                                <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                <i className="mdi mdi-basket menu-icon" />
                                </span> Qu???n l?? s???n ph???m - Th??m m???i s???n ph???m
                            </h3>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <form className="forms-sample" onSubmit={this.submit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName1">T??n s???n ph???m</label>
                                        <input type="text" required className="form-control" id="exampleInputName1" name="name" onChange={e=>this.state.name= e.target.value}/> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPrice">Gi?? s???n ph???m</label>
                                        <input type="number" required className="form-control" id="exampleInputPrice" name="price" onChange={e=>this.state.price= e.target.value}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDiscount">Khuy???n m??i</label>
                                        <input type="number" className="form-control" id="exampleInputDiscount" name="discount" onChange={e=>this.state.discount= e.target.value} min="0" max="100" required="true" message="1-100 l?? h???p l???"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formFileMultiple" className="form-label">???nh s???n ph???m</label><br></br>
                                        <input className="form-control" name="image" id="image" required type="file" onChange={this.handleUpload}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDescription">M?? t???</label>
                                        <textarea className="form-control" required id="exampleDescription" name="description" onChange={e=>this.state.description= e.target.value}/>
                                    </div>
                                    <button type="submit" className="btn btn-gradient-primary mr-2">Th??m</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div> 
    )
  }
}

export default AddProduct;