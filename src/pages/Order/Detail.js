import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
class Detail extends Component {
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
                                    <i className="mdi mdi-file-document-box menu-icon" />
                                    </span> Quản Lí Đơn Hàng
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Tổng Quan<i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Thông tin khách hàng</h4>
                                        <div className="project-info-box">
                                            <p><b>Tên:</b>Hồ Văn Quân</p>
                                            <p><b>Số điện thoại:</b> 0383498833</p>
                                            <p><b>Địa chỉ:</b> Sơn Trà - Đà Nẵng</p>
                                            <p><b>Ngày đặt:</b> 11-4-2021</p>
                                            <p><b>Ngày giao:</b> 30-4-2021</p>
                                            <p><b>Đã thanh toán:</b> 0 VND</p>
                                            <p><b>Tổng tiền còn lại phải thanh toán:</b> 200.000 VND</p>
                                            <p className="mb-0"><b>Tổng tiền hóa đơn:</b> 200.000 VND</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Chi tiết đơn hàng</h4>
                                        <div className="container bootdey">  
                                            <div className="col-md-12">  
                                                <div className="portlet light bordered">
                                                    <div className="portlet-title tabbable-line">
                                                        <div className="caption caption-md">
                                                            <i className="icon-globe theme-font hide" />
                                                        </div>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Tên sản phẩm</th>
                                                                    <th>Số lượng</th>
                                                                    <th>Nhà cung cấp</th>
                                                                    <th>Thành tiền</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="active">
                                                                    <th scope="row">1</th>
                                                                    <td>Load máy</td>
                                                                    <td>1</td>
                                                                    <td>Công ty TNHH</td>
                                                                    <td>200000 VND</td>
                                                                </tr> 
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
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
export default Detail;