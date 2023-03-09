import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function UserCreate() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required("Tên không được để trống"),
            email: yup
                .string()
                .required("Email không được để trống")
                .matches(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    "Email không hợp lệ"
                ),
            phone: yup.string().required("Phone không được để trống"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
    });

    const onSubmit = async (data) => {
        try {
            let res = await axios.post(
                "http://localhost:8080/api/v1/users",
                data
            );
            alert("Tạo user thành công");
            setTimeout(() => {
                navigate(`/users/${res.data.id}`)
            }, 1500)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="col-form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    {...register("name")}
                                />
                                <p className="text-danger">
                                    {errors.name?.message}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    {...register("email")}
                                />
                                <p className="text-danger">
                                    {errors.email?.message}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    {...register("phone")}
                                />
                                <p className="text-danger">
                                    {errors.phone?.message}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Address
                                </label>
                                <select
                                    className="form-select"
                                    id="address"
                                    {...register("address")}
                                ></select>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    className="form-control"
                                    {...register("password")}
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-secondary btn-back">
                                Quay lại
                            </button>
                            <button
                                className="btn btn-success"
                                id="btn-save"
                                type="submit"
                            >
                                Tạo User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserCreate;
