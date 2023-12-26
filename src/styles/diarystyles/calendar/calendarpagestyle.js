import styled from "@emotion/styled";

export const CalendarWapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
`;

export const CalendarTop = styled.header`
  position: relative;
  display: block;
  width: 100%;
  padding-left: 23px;
  padding-bottom: 9px;
`;

export const CalendarContent = styled.div`
  display: flex;
  justify-content: center;

  // 캘린더 전체
  .react-calendar {
    width: 380px;
    height: 540px;
    background: #ffeeed;
    border: none;
    border-radius: 30px;
    font-family: Pretendard-Regular;
    line-height: 35px;
  }

  // 캘린더 상단 (네비게이션)
  .react-calendar__navigation {
    display: flex;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  // 캘린더 상단 (년, 월)
  .react-calendar__navigation__label {
    font-family: Dovemayo_gothic;
    font-size: 17px;
    letter-spacing: 0.7px;
  }

  // 캘린더 상단 (<<)
  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    width: 55.14px;
    font-size: 25px;
  }

  // 캘린더 상단 (>>)
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    width: 55.14px;
    font-size: 25px;
  }

  // 캘린더 상단 (<)
  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button {
    width: 55.14px;
    font-size: 25px;
  }

  // 캘린더 상단 (>)
  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    width: 55.14px;
    font-size: 25px;
  }

  // (주)
  .react-calendar__month-view__weekdays__weekday {
    font-size: 14px;
    padding: 0.5em;
    margin-bottom: 8px;
    // (월~일 텍스트)
    abbr {
      text-decoration: none !important;
    }
  }

  // 일 선택
  .react-calendar__tile.react-calendar__month-view__days__day {
    font-size: 13px;
    margin-bottom: 10px;
  }

  // 일 선택 (오늘 및 선택 되는 일자, active)
  .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day {
    background-color: #d2ceff;
    border-radius: 70%;
    abbr {
      color: #000;
    }
  }

  // 일 선택 (선택 일자 변경 시 오늘 일자, active)
  .react-calendar__tile.react-calendar__tile--active.react-calendar__tile--range.react-calendar__tile--rangeStart.react-calendar__tile--rangeEnd.react-calendar__tile--rangeBothEnds.react-calendar__month-view__days__day {
    background-color: #ffc2c0;
    border-radius: 70%;
    abbr {
      color: #000;
    }
  }

  // 월 선택
  .react-calendar__tile.react-calendar__year-view__months__month {
    font-family: Dovemayo_gothic;
    font-size: 16px;
  }

  // 년 선택
  .react-calendar__tile.react-calendar__decade-view__years__year {
    font-family: Dovemayo_gothic;
    font-size: 16px;
  }

  // 년 기간 선택
  .react-calendar__tile.react-calendar__century-view__decades__decade {
    font-family: Dovemayo_gothic;
    font-size: 16px;
  }

  // 아래부터는 기존 react calendar css (변경 X)
  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 14px;
    font-weight: bold;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    font: inherit;
    font-size: 12px;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: #ffff76;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
