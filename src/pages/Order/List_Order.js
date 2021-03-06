import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import './Order.css';
class List_Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            activePage:1,
            itemsCountPerPage:1,
            pageRangeDisplayed: 3,
            totalItemsCount:1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    
    componentDidMount() {
        axios.get('order_handling')
        .then(res => {
            this.setState({
                orders: res.data.data 
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }
    
    handlePageChange(pageNumber) {
        console.log("active page is ${pageNumber}");
        //this.setState({activePage: pageNumber});
        axios.get('order_handling?page='+pageNumber)
        .then(res => {
            this.setState({
                orders: res.data.data,
                itemsCountPerPage:res.data.per_page,
                totalItemsCount:res.data.total,
                activePage:res.data.current_page
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }

    updateStatus(id){
        axios.put('admin_order/'+id, {status: 2})
            .then(() => {
                alert("Đã xong!");
                this.componentDidMount();
            }).catch((error) => {
                console.log(error)
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
                                        <h4 className="card-title">Đơn hàng đang xử lí</h4>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th> ID</th>
                                                    <th> Tên </th>
                                                    <th> Số điện thoại </th>
                                                    <th> Thời gian </th>
                                                    <th> Trạng thái </th>
                                                    <th> Cập nhật </th>
                                                    <th> Chi tiết </th>
                                                </tr>
                                                </thead>
                                        <tbody>
                                            {
                                                this.state.orders.map((item,index)=>(
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.order_time}</td>
                                                        <td>
                                                            <button type="button" class="btn btn-gradient-info btn-rounded btn-fw">Đang xử lí</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn btn-outline-success btn-fw" onClick={()=>this.updateStatus(item.id)}>Xong</button>
                                                        </td>
                                                        <td>
                                                            <button type="submit">
                                                                <Link to={{pathname:'/order_detail', state: {id:item.id}}} className="nav-link">
                                                                    <i className="mdi mdi-alert-octagon" />
                                                                </Link>
                                                            </button>
                                                            
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                        onChange={this.handlePageChange.bind(this)}
                                        itemClass="page-item"
                                        linkClass="page-link "
                                        />
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

export default List_Order;