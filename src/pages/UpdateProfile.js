import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import axios from 'axios';
import {storage} from '../firebase/index';
class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            phone: "",
            address: "",
            url_avatar: "",
            description: "",
            url_document: "",
            service_category_id:2
        }
        var retrievedData = localStorage.getItem("User");
        var user = JSON.parse(retrievedData);
        this.state.id = user[0].id;
        this.handleUpload1 = this.handleUpload1.bind(this);
        this.handleUpload2 = this.handleUpload2.bind(this);
    }
    handleUpload1 = (e) => {
        const files = e.target.files[0]
        const uploadTask = storage.ref(`images/${files.name}`).put(files);
        uploadTask.on('state_changed', 
            () => {
            // complete function ....
            storage.ref('images').child(files.name).getDownloadURL().then(url => {
                this.state.url_avatar = url;
                console.log("avatar:"+this.state.url_avatar);
            })
        });    
    }

    handleUpload2 = (e) => {
        const files = e.target.files[0]
        const uploadTask = storage.ref(`images/${files.name}`).put(files);
        uploadTask.on('state_changed', 
            () => {
            // complete function ....
            storage.ref('images').child(files.name).getDownloadURL().then(url => {
                this.state.url_document = url;
            })
        });    
    }
    clearData = () =>{
        document.getElementById('exampleIn putPhone').value = '';
        document.getElementById('exampleIn putName1').value = '';
        document.getElementById('exampleDescription').value = '';
        document.getElementById('service_category_id').value = '';
        document.getElementById('image1').value = '';
        document.getElementById('image').value = '';
    }
    submit = (event) => {
        event.preventDefault();
        let user_infor = {
            phone: this.state.phone,
            address: this.state.address,
            avatar: this.state.url_avatar,
            description:this.state.description,
            document: this.state.url_document,
            status:"PENDING",
            service_category_id:this.state.service_category_id
        }
        console.log(user_infor);

        axios.patch('vendor_update_profile/'+this.state.id, user_infor)
            .then((res) => {
                alert("C???p nh???t th??nh c??ng!");
                this.clearData();
            }).catch((error) => {
                console.log(error);
                alert("Vui l??ng c???p nh???t m???t v??i th??ng tin!");
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
                                </span> C???p Nh???t Th??ng Tin Nh?? H??ng
                            </h3>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" onSubmit={this.submit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPhone">S??? ??i???n tho???i</label>
                                        <input type="tel" required className="form-control" id="exampleIn putPhone" name="phone" onChange={e=>this.state.phone= e.target.value}/> 
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputName1">?????a ch???</label>
                                        <input type="text" required className="form-control" id="exampleIn putName1" name="address" onChange={e=>this.state.address= e.target.value}/> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDescription">Gi???i thi???u ng???n</label>
                                        <textarea className="form-control" required id="exampleDescription" name="description" onChange={e=>this.state.description= e.target.value}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputState">Lo???i s???n ph???m</label>
                                        <select class="form-control" name="service_category_id" id ="service_category_id" onChange={e=>this.state.service_category_id= e.target.value}>
                                            <option value="2" >B??nh kem</option>
                                            <option value="1" >Loa m??y</option>
                                            <option value="3" >Trang tr??</option>
                                            <option value="4" >Th???c ??n</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="formFileMultiple" className="form-label">H??nh ???nh ?????i di???n</label><br></br>
                                        <input className="form-control" id ="image1" name="image" required type="file" onChange={this.handleUpload1}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="formFileMultiple" className="form-label">Gi???y ch???ng nh???n/ch???ng ch??? v??? VSATTP</label><br></br>
                                        <input className="form-control" id ="image" name="image" required type="file" onChange={this.handleUpload2}/>
                                    </div>

                                    <button type="submit" className="btn btn-gradient-primary mr-2">C???p nh???t</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
        );
    }
}
export default UpdateProfile;