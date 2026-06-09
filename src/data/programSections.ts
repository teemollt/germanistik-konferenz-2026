export type ProgramAttachment = {
  href: string | null;
  filename: string;
};

export type ProgramSection = {
  id: string;
  titleKey: string;
  contactEmail: string;
  topicFileHref: string | null;
  topicFileName: string;
};

export const programAttachment: ProgramAttachment = {
  href: null,
  filename: "AGT-2027-Programm.pdf",
};

export const programSections: ProgramSection[] = [
  {
    id: "section-01",
    titleKey: "programSection01Title",
    contactEmail: "cbaier@snu.ac.kr",
    topicFileHref: "/files/sections/01-ostasien-diskurse.docx",
    topicFileName: "01-ostasien-diskurse.docx",
  },
  {
    id: "section-02",
    titleKey: "programSection02Title",
    contactEmail: "melusine@snu.ac.kr",
    topicFileHref: "/files/sections/02-uebersetzung-als-transkultureller-raum.docx",
    topicFileName: "02-uebersetzung-als-transkultureller-raum.docx",
  },
  {
    id: "section-03",
    titleKey: "programSection03Title",
    contactEmail: "gaurib.fld@gmail.com",
    topicFileHref: "/files/sections/03-stellenwert-der-migrationsliteratur.docx",
    topicFileName: "03-stellenwert-der-migrationsliteratur.docx",
  },
  {
    id: "section-04",
    titleKey: "programSection04Title",
    contactEmail: "lievepooh@gmail.com",
    topicFileHref: "/files/sections/04-rilke-kafka-ostasien.docx",
    topicFileName: "04-rilke-kafka-ostasien.docx",
  },
  {
    id: "section-05",
    titleKey: "programSection05Title",
    contactEmail: "my.lee@snu.ac.kr",
    topicFileHref: "/files/sections/05-daf-in-asien.docx",
    topicFileName: "05-daf-in-asien.docx",
  },
  {
    id: "section-06",
    titleKey: "programSection06Title",
    contactEmail: "kim.sunghwa@chungbuk.ac.kr",
    topicFileHref: "/files/sections/06-literatur-und-medien.docx",
    topicFileName: "06-literatur-und-medien.docx",
  },
  {
    id: "section-07",
    titleKey: "programSection07Title",
    contactEmail: "cristlo5@snu.ac.kr",
    topicFileHref: "/files/sections/07-kuenstliche-intelligenz-sprachwissenschaft-daf.docx",
    topicFileName: "07-kuenstliche-intelligenz-sprachwissenschaft-daf.docx",
  },
  {
    id: "section-08",
    titleKey: "programSection08Title",
    contactEmail: "kimyouns@sogang.ac.kr",
    topicFileHref: "/files/sections/08-reiseliteratur-inklusivitaet.docx",
    topicFileName: "08-reiseliteratur-inklusivitaet.docx",
  },
  {
    id: "section-09",
    titleKey: "programSection09Title",
    contactEmail: "lotus01@snu.ac.kr",
    topicFileHref: "/files/sections/09-environmental-humanities.docx",
    topicFileName: "09-environmental-humanities.docx",
  },
  {
    id: "section-10",
    titleKey: "programSection10Title",
    contactEmail: "changyzl@changwon.ac.kr",
    topicFileHref: "/files/sections/10-kontrastive-linguistik-ostasien.docx",
    topicFileName: "10-kontrastive-linguistik-ostasien.docx",
  },
  {
    id: "section-11",
    titleKey: "programSection11Title",
    contactEmail: "agt2027.incheon@gmail.com",
    topicFileHref: "/files/sections/11-freie-themen.docx",
    topicFileName: "11-freie-themen.docx",
  },
];
