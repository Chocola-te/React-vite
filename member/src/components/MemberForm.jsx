import { useState } from "react";
import axios from "axios";
import './MemberForm.css';
import { useNavigate } from "react-router-dom";

export default function MemberForm() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
    role: "USER"
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setForm({ ...form, address: data.address });
      }
    }).open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData : 파일 업로드 또는 여러 폼 데이터를 multipart/form-data 형태로 서버에 보낼 때
    // multipart/form-data방식으로 보내지 않으면 경로만 전송되고, form 내부에 저장된 값은 전송되지 않는다.
    try{
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);

    await axios.post("http://localhost:8080/api/members", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    alert("회원가입 완료!");
    // 입력한 url로 이동하는 navigate 함수
    navigate('/members');
    } catch (err) {
      alert("회원 가입 중 오류 발생");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="ID" onChange={e => setForm({ ...form, id: e.target.value })} />
      <input placeholder="이름" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="file" type="file" onChange={e => setImage(e.target.files[0])} accept="image/*" />
      <input placeholder="전화번호" onChange={e => setForm({ ...form, phone: e.target.value })} />
      <input value={form.address} placeholder="주소" readOnly />
      <button type="button" onClick={handleAddressSearch}>주소 검색</button>
      <select
        name="role"
        value={form.role}
        onChange={e => setForm({ ...form, role: e.target.value })}
        style={{ marginRight: '0.5rem' }}
      >
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <button type="submit">회원가입</button>
    </form>
  );
}