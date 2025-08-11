import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/members');
        setMembers(res.data);
      } catch (err) {
        setError('회원 목록을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const onDelete = (idNo) => {
    const deleteMember = async () => {
      try {
        if (window.confirm("삭제하시겠습니까?")) {
          setLoading(true);
          const res = await axios.delete(`http://localhost:8080/api/members/delete/${idNo}`);
          alert("삭제되었습니다.");
        }
      } catch(err) {
        setError("회원 삭제 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    deleteMember();
    setMembers(members.filter((item) => item.idNo !== idNo));
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>회원 목록</h2>
      {members.length === 0 ? (
        <p>등록된 회원이 없습니다.</p>
      ) : (
        <ul>
          {members.map((member) => (
            <li key={member.idNo}>
              {member.name} ({member.id}) - {member.role} <br />
              전화: {member.phone} <br />
              주소: {member.address} <br />
              {member.image && ( // && === member의 image가 저장되어 있다면
                <img
                  src={`http://localhost:8080${member.image}`}
                  alt={member.name}
                  // objectFit
                  // https://www.daleseo.com/css-object-fit/
                  style={{ width: 100, height: 100, objectFit: 'cover', marginTop: 8 }}
                />
              )}
              <button onClick={() => onDelete(member.idNo)}>삭제</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}