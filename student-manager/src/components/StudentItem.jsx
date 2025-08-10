import React from "react";

export default function StudentItem({ sv, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{sv.masv}</td>
      <td>{sv.hoten}</td>
      <td><a href={`mailto:${sv.email}`}>{sv.email}</a></td>
      <td>{sv.gioitinh}</td>
      <td>{sv.ngaysinh}</td>
      <td>
        <button className="btn btn-sm btn-edit" onClick={() => onEdit(index)}>Sửa</button>{" "}
        <button className="btn btn-sm btn-delete" onClick={() => onDelete(index)}>Xóa</button>
      </td>
      <td style={{ display: "none" }}>{sv.ghichu}</td>
    </tr>
  );
}
