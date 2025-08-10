import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import studentsSample from "./data";

export default function App() {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem("students");
    return stored ? JSON.parse(stored) : studentsSample;
  });

  const [formData, setFormData] = useState({
    masv: "",
    hoten: "",
    email: "",
    gioitinh: "",
    ngaysinh: "",
    ghichu: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [thongBao, setThongBao] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
  switch (name) {
    case "masv":
      if (!value) {
        return "Mã sinh viên không được để trống";
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return "Mã sinh viên chỉ gồm chữ và số, không có ký tự đặc biệt";
      }
      return "";
    case "hoten":
      if (!value) {
        return "Họ và tên không được để trống";
      }
      if (value.length > 50) {
        return "Họ và tên không được quá 50 ký tự";
      }
      return "";
    case "email":
      if (!value) {
        return "Email không được để trống";
      }
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        return "Email không hợp lệ";
      }
      return "";
    default:
      return "";
  }
};

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    ["masv", "hoten", "email"].forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg){
        newErrors[field] = errorMsg;
      } 
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Vui lòng sửa lỗi trước khi gửi form!");
      return;
    }

    if (selectedIndex === null) {
      setStudents((prev) => [...prev, formData]);
      setThongBao("Thêm sinh viên thành công!");
    } else {
      setStudents((prev) =>
        prev.map((stu, i) => (i === selectedIndex ? formData : stu))
      );
      setThongBao("Cập nhật sinh viên thành công!");
      setSelectedIndex(null);
    }

    setFormData({
      masv: "",
      hoten: "",
      email: "",
      gioitinh: "",
      ngaysinh: "",
      ghichu: "",
    });
    setErrors({});

    setTimeout(() => setThongBao(""), 3000);
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setSelectedIndex(index);
    setErrors({});
  };

  const handleDelete = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      setStudents((prev) => prev.filter((_, i) => i !== index));
      setThongBao("Xóa thành công!");
      setTimeout(() => setThongBao(""), 3000);

      if (selectedIndex === index) {
        setSelectedIndex(null);
        setFormData({
          masv: "",
          hoten: "",
          email: "",
          gioitinh: "",
          ngaysinh: "",
          ghichu: "",
        });
        setErrors({});
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="container app-container">
      <div className="container_head">
        <p
          className="navbar-brand fw-bold text-white"
          id="head"
          style={{ textAlign: "center" }}
        >
          Quản lý sinh viên
        </p>
      </div>
      <div className="container_body d-flex gap-3 mt-3 flex-wrap">
        <div
          className="container_body_left flex-shrink-0"
          style={{ minWidth: 380 }}
        >
          <StudentForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            selectedIndex={selectedIndex}
            thongBao={thongBao}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div
          className="container_body_right flex-grow-1"
          style={{ maxWidth: 750 }}
        >
          <StudentList
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
