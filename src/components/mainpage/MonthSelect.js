import React, { useEffect, useRef, useState } from "react";
import {
  DropDownYearMonth,
  MonthArray,
  MonthArrayWrapper,
  MonthDropDown,
  MonthNextBt,
  MonthPrevBt,
  NowMonthBt,
  NowYearBt,
  YearDropDown,
  YearDropDownContent,
} from "../../styles/diarystyles/mainpage/selectdatestyle";

const MonthSelect = ({ data, setFilteredData }) => {
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
  // const [filteredData, setFilteredData] = useState([]);
  // 현재시점기준에서 연, 월 저장 JS에서는 default가 0이므로
  // Date().getMonth + 1
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  // 드롭다운 메뉴가 열려 있는지 여부를 저장하는 state
  // 첫 상태가 닫힌 상태이므로 false
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  // 드롭다운 메뉴의 참조를 저장하는 ref
  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  // 선택된 년도와 월에 따라 데이터를 필터링하는 함수
  const filterByMonthAndYear = (year, month) => {
    const filtered = data.filter(item => {
      const itemDate = new Date(item.date); // item.date 배열이 다담긴다. itemDate
      //Sat Dec 16 2023 09:00:00 GMT+0900 (한국 표준시)
      // console.log(itemDate);
      // 2023
      const itemYear = itemDate.getFullYear();
      // console.log(itemYear);
      // 12
      const itemMonth = itemDate.getMonth() + 1;
      // console.log(itemMonth);
      return itemYear === year && itemMonth === month;
    });
    setFilteredData(filtered);
    // console.log("filterByMonthAndYear", filtered);
  };
  // console.log("day:", filteredData);

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
  // YearSelectContent 를 선택하였을 때 year 드롭다운을 막는 용도
  // Month Dropdown까지 가기전에 막는 역할
  const handleYearDropdownContentClick = e => {
    e.stopPropagation();
  };
  return (
    <>
      {/* prev button */}
      <MonthPrevBt onClick={prevMonth}>
        <img src={process.env.PUBLIC_URL + "/images/icon_arrow.svg"} />
      </MonthPrevBt>

      {/* dropdown */}
      <MonthDropDown onClick={toggleDropdown} ref={monthDropdownRef}>
        {/* dropbtn */}
        <NowMonthBt>{monthNames[selectedMonth - 1]}</NowMonthBt>
        {dropdownOpen && (
          // dropdown content
          <DropDownYearMonth>
            <YearDropDown
              onClick={handleYearDropdownContentClick}
              ref={yearDropdownRef}
            >
              {/* dropbtn */}
              <NowYearBt onClick={toggleYearDropdown}>
                {selectedYear}{" "}
                <img src={process.env.PUBLIC_URL + "/images/icon_arrow.svg"} />
              </NowYearBt>

              {yearDropdownOpen && (
                <YearDropDownContent>
                  {Array.from({ length: 11 }, (_, i) => (
                    <div key={i} onClick={() => selectYear(2020 + i)}>
                      {2020 + i}
                    </div>
                  ))}
                </YearDropDownContent>
              )}
            </YearDropDown>
            <MonthArrayWrapper>
              {monthNames.map((month, i) => (
                <MonthArray key={i} onClick={() => selectMonth(i + 1)}>
                  <span>{month}</span>
                </MonthArray>
              ))}
            </MonthArrayWrapper>
          </DropDownYearMonth>
        )}
      </MonthDropDown>
      <MonthNextBt onClick={nextMonth}>
        <img src={process.env.PUBLIC_URL + "/images/icon_arrow.svg"} />
      </MonthNextBt>
    </>
  );
};

export default MonthSelect;
