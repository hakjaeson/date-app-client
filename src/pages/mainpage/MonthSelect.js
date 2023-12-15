import React, { useEffect, useState, useRef } from "react";
import "./test.css";
import {
  DropDownYearMonth,
  MonthDropDown,
  NowMonthBt,
  NowYearBt,
  YearWrapper,
} from "../../styles/diarystyles/mainpage/mainpagestyle";

const MonthSelect = () => {
  // 예시 데이터
  const data = [
    { id: 1, date: "2023-01-01", value: "A" },
    { id: 2, date: "2023-02-15", value: "B" },
    { id: 3, date: "2023-03-30", value: "C" },
    { id: 4, date: "2023-01-22", value: "D" },
  ];

  // 월을 영어로 표현하기 위한 배열
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // 필터링된 데이터와 선택된 년도 및 월을 저장하는 state
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  // 드롭다운 메뉴가 열려 있는지 여부를 저장하는 state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  // 드롭다운 메뉴의 참조를 저장하는 ref
  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  // 선택된 년도와 월에 따라 데이터를 필터링하는 함수
  const filterByMonthAndYear = (year, month) => {
    const filtered = data.filter(item => {
      const itemDate = new Date(item.date);
      const itemYear = itemDate.getFullYear();
      const itemMonth = itemDate.getMonth() + 1;
      return itemYear === year && itemMonth === month;
    });
    setFilteredData(filtered);
  };

  // 선택된 년도 또는 월이 변경될 때마다 데이터를 필터링
  useEffect(() => {
    filterByMonthAndYear(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  // 화면의 어떤 부분을 클릭하든 드롭다운 메뉴가 닫히도록 하는 이벤트 핸들러
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setYearDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // 드롭다운 메뉴를 열거나 닫는 함수
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // 년도 선택 드롭다운 메뉴를 열거나 닫는 함수
  const toggleYearDropdown = e => {
    e.stopPropagation();
    setYearDropdownOpen(!yearDropdownOpen);
  };

  // 월을 선택하는 함수
  const selectMonth = month => {
    setSelectedMonth(month);
    setDropdownOpen(false);
  };

  // 년도를 선택하는 함수
  const selectYear = year => {
    setSelectedYear(year);
    setYearDropdownOpen(false);
  };

  // 이전 월을 선택하는 함수
  const prevMonth = () => {
    setSelectedMonth(prevMonth => {
      if (prevMonth - 1 < 1) {
        setSelectedYear(prevYear => prevYear - 1);
        return 12;
      }
      return prevMonth - 1;
    });
  };

  // 다음 월을 선택하는 함수
  const nextMonth = () => {
    setSelectedMonth(prevMonth => {
      if (prevMonth + 1 > 12) {
        setSelectedYear(prevYear => prevYear + 1);
        return 1;
      }
      return prevMonth + 1;
    });
  };

  return (
    <>
      {/* prev button */}
      <button onClick={prevMonth}>
        <img src={process.env.PUBLIC_URL + "/images/icon_arrow.svg"} />
      </button>
      {/* dropdown */}
      <MonthDropDown onClick={toggleDropdown} ref={monthDropdownRef}>
        {/* dropbtn */}
        <NowMonthBt>{monthNames[selectedMonth - 1]}</NowMonthBt>
        {dropdownOpen && (
          // dropdown content
          <DropDownYearMonth>
            <div
              className="dropdown"
              onClick={toggleYearDropdown}
              ref={yearDropdownRef}
            >
              {/* dropbtn */}
              <YearWrapper>
                <NowYearBt>{selectedYear}</NowYearBt>
              </YearWrapper>
              {yearDropdownOpen && (
                <div className="dropdown-content">
                  {Array.from({ length: 11 }, (_, i) => (
                    <div key={i} onClick={() => selectYear(2020 + i)}>
                      {2020 + i}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {monthNames.map((month, i) => (
              <div key={i} onClick={() => selectMonth(i + 1)}>
                {month}
              </div>
            ))}
          </DropDownYearMonth>
        )}
      </MonthDropDown>
      <button onClick={nextMonth}>
        {" "}
        <img src={process.env.PUBLIC_URL + "/images/icon_arrow.svg"} />
      </button>
      {/* filtering content */}
      {filteredData.map(item => (
        <div key={item.id}>
          <p>{item.date}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </>
  );
};

export default MonthSelect;
