import React from "react";
import "../style/PostalManagementCompleted.css";

function PostalManagementCompleted()
{
    return( 
        <div className="main">
            <div className="row">
                <div className="pannel">
                    <div className="title">
                        <h2> <i className=""></i> Quản lý bưu gửi </h2>
                    </div>

                    <div className="text-info">
                        <div className="row">
                            <div className="has-feedback">
                                <label className="control-label"> Mã đơn hàng</label>
                                <input 
                                    type="text " 
                                    id="code" name="code" 
                                    value 
                                    className="form-control has-feedback-left" 
                                    placeholder="Nhập mã"
                                />
                            </div>
                            <div className="has-feedback">
                                <label className="control-label"> Tên, sđt người gửi</label>
                                <input 
                                    type="text " 
                                    id="code" name="code" 
                                    value 
                                    className="form-control has-feedback-left" 
                                    placeholder="Tên, sđt người gửi"
                                />
                            </div>
                            <div className="has-feedback">
                                <label className="control-label"> tên, sđt người nhận</label>
                                <input 
                                    type="text " 
                                    id="code" name="code" 
                                    value 
                                    className="form-control has-feedback-left" 
                                    placeholder="tên, sđt người nhận"
                                />
                            </div>
                            <div className="has-feedback">
                            <label className="control-label">Ngày gửi</label>
                            <input type="text" className="time_date_picker" 
                               
                            />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
}

export default PostalManagementCompleted;   