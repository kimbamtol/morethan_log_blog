export const GA_TRACKING_ID = "G-BHZ2WJKLVL";

// 페이지뷰 이벤트 트래킹
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// 사용자 이벤트 트래킹 (예: 버튼 클릭)
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
