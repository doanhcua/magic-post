import React from "react";
import "../style/PostalManagementCompleted.css";
import barCode from "../assets/icon/barcode-solid.svg"

function PostalManagementCompleted()
{
    return( 
        <div className="main">
            <div className="row">
                <div className="pannel">
                    <div className="title">
                        <h2> <i className=""></i> Quản lý bưu gửi </h2>
                    </div>

                    <div className="content text-info">
                        <div className="row">
                            <div className="has-feedback">
                                <label className="control-label"> Mã đơn hàng</label>
                                <div className="input-group">
                                    {/* <span className="bar-code">
                                        <img src={barCode} alt="" />
                                    </span> */}
                                    <input 
                                        type="text" 
                                        id="code" name="code" 
                                        value=""
                                        class="form-control has-feedback-left" 
                                        placeholder="Nhập mã"
                                    />
                                </div>
                                
                            </div>
                            <div className="has-feedback">
                                <label className="control-label"> Tên, sđt người gửi</label>
                                <input 
                                    type="text " 
                                    id="code" name="code" 
                                    value =""
                                    className="form-control has-feedback-left" 
                                    placeholder="Tên, sđt người gửi"
                                />
                            </div>
                            <div className="has-feedback">
                                <label className="control-label"> Tên, sđt người nhận</label>
                                <input 
                                    type="text " 
                                    id="code" name="code" 
                                    value =""
                                    className="form-control has-feedback-left" 
                                    placeholder="tên, sđt người nhận"
                                />
                            </div>
                            <div className="has-feedback">
                                <label className="control-label">Ngày gửi</label>
                                <input type="text" className="time_date_picker" 
                                
                                />
                            </div>

                            <div className="has-feedback">
                                <div className="text-info">
                                    <label className="control-label">Trạng thái</label>
                                    <select id="status" name="status" class="form-control" autocomplete="off">
                                        <option value>Tất cả</option>
                                        <option value="created">Chờ bưu cục xác nhận</option>
                                        <option value="accepted">Bưu cục đã xác nhận</option>
                                        <option value="canceled">Đã huỷ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                {/* <div className="has-feedback">
                    <div className="text-info">
                        <label className="control-label">Trạng thái</label>
                        <select id="status" name="status" class="form-control" autocomplete="off">
                            <option value>Tất cả</option>
                            <option value="created">Chờ bưu cục xác nhận</option>
                            <option value="accepted">Bưu cục đã xác nhận</option>
                            <option value="canceled">Đã huỷ</option>
                            </select>
                    </div>
                </div> */}
            </div>

        </div>


    );
}

export default PostalManagementCompleted;   