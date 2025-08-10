import React from "react";

export default function StudentForm({
  formData,
  setFormData,
  handleSubmit,
  selectedIndex,
  thongBao,
  errors,
  handleChange,
  handleBlur,
}) {
  return (
    <form className="form_add" id="form_add" onSubmit={handleSubmit} noValidate>
      <h4 className="Tieu_de">Nhập thông tin sinh viên</h4>
      <p
        id="thongBao"
        style={{ color: "green", fontWeight: "bold", minHeight: "5px" }}
      >
        {thongBao}
      </p>
      <div className="form_noi_dung">
        <div className="form-group">
          <label htmlFor="masv" className="form-label">
            Mã sinh viên:
          </label>
          <input
            type="text"
            className={`form-control ${errors.masv ? "input-error" : ""}`}
            id="masv"
            name="masv"
            value={formData.masv}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.masv && (
            <div className="error-text" style={{ color: "red" }}>
              {errors.masv}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="hoten" className="form-label">
            Họ và tên:
          </label>
          <input
            type="text"
            className={`form-control ${errors.hoten ? "input-error" : ""}`}
            id="hoten"
            name="hoten"
            value={formData.hoten}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.hoten && (
            <div className="error-text" style={{ color: "red" }}>
              {errors.hoten}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "input-error" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && (
            <div className="error-text" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ngaysinh" className="form-label">
            Ngày sinh:
          </label>
          <input
            type="date"
            className="form-control"
            id="ngaysinh"
            name="ngaysinh"
            value={formData.ngaysinh}
            onChange={handleChange}
          />
        </div>

        <div className="form-group d-flex align-items-center">
          <label className="form-label mb-0 me-2">Giới tính:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gioitinh"
              id="nu"
              value="Nữ"
              checked={formData.gioitinh === "Nữ"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="nu">
              Nữ
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gioitinh"
              id="nam"
              value="Nam"
              checked={formData.gioitinh === "Nam"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="nam">
              Nam
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ghichu" className="form-label">
            Ghi chú:
          </label>
          <textarea
            id="ghichu"
            name="ghichu"
            className="form-control"
            rows="3"
            value={formData.ghichu}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="khungbtn">
        <button type="submit" className="btnThem" id="btnThem">
          {selectedIndex === null ? "Gửi thông tin" : "Cập nhật"}
        </button>
      </div>
    </form>
  );
}
