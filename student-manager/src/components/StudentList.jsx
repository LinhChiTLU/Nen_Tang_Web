import React from "react";
import StudentItem from "./StudentItem";

export default function StudentList({ students, handleEdit, handleDelete }) {
  return (
    <table className="bang" id="table">
      <thead className="text-center">
        <tr id="table-head">
          <th>STT</th>
          <th>Mã SV</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Thao tác</th>
          <th style={{ display: "none" }}>Ghi chú</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {students.map((sv, index) => (
          <StudentItem
            key={index}
            sv={sv}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
