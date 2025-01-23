// Đếm số từ trong đoạn văn bản
const countWord = () => {
  const doanVanBan = document.getElementById("inputText").value;

  // Tách từ và loại bỏ dấu câu
  const tu = doanVanBan.split(/\s+/).filter(Boolean);
  const dauCau = /[.,\/#!$%\^&\*;:{}=\-_`~()"']/g;
  const tuKhongDauCau = tu.map((t) => t.replace(dauCau, "")).filter((t) => t);

  // Đếm số từ
  const soTu = tuKhongDauCau.length;

  // Hiển thị kết quả
  document.getElementById(
    "result"
  ).textContent = `Số từ trong đoạn văn bản là: ${soTu}`;
};

// Xóa nội dung
const clearContent = () => {
  document.getElementById("inputText").value = "";
  document.getElementById("result").textContent = "";
};

// Thay đổi giao diện
const changeTheme = () => {
  const theme = document.getElementById("themeSwitcher").value;
  if (theme === "system") {
    localStorage.removeItem("theme");
    applySystemTheme();
  } else {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
};

// Áp dụng giao diện theo hệ thống
const applySystemTheme = () => {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute(
    "data-theme",
    systemDark ? "dark" : "light"
  );
};

const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.getElementById("themeSwitcher").value = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.getElementById("themeSwitcher").value = "system";
    applySystemTheme();
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", applySystemTheme);
};

initTheme();
