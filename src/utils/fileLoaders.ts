import { axiosInstance } from "@store/axiosConfig";
import fs from "fs";

export const downloadXLSFile = async (href: string) => {
  try {
    const response = await axiosInstance.get(href, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "Blob",
      },
    });

    const outputFilename = `${Date.now()}.xls`;

    // If you want to download file automatically using link attribute.
    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", outputFilename);
    document.body.appendChild(link);
    link.click();

    // OR you can save/write file locally.
    fs.writeFileSync(outputFilename, response.data);
  } catch (error) {
    console.log(error);
  }
};
