import React from "react";
import AlYousserLogo from "../image/Alyousser - BR - لوغو الشركة-19-03.png";
import "./AlYousser.css";

const AlYousser = () => {
  return (
    <div className="AlYousser">
      <img src={AlYousserLogo} alt="" className="logo" />
      <div className="container">
        <form>
          <div className="General-information">
            <div className="headline">
              <h4>المعلومات العامة : </h4>
            </div>
            <div className="boxs">
              <div className="box">
                <div className="box-content">
                  <label>الاسم :</label>
                  <input type="text" name="" value="" />
                  <label>الكنية:</label>
                  <input type="text" name="" value="" />
                </div>
                <div className="box-content">
                  <label>اسم الأب :</label>
                  <input type="text" name="" value="" />
                  <label>اسم الأم :</label>
                  <input type="text" name="" value="" />
                </div>
                <div className="box-content">
                  <label>تاريخ ومكان الولادة :</label>
                  <div style={{ display: "flex" }}>
                    <input type="text" name="" value="" />
                    <input type="date" name="" value="" />
                  </div>
                </div>
                <div className="box-content">
                  <label>الجنسية:</label>
                  <select>
                    <option>-- اختر --</option>
                    <option>عربي سوري</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    value=""
                    style={{ display: "none" }}
                  />
                </div>
                <div className="box-content">
                  <label>الحالة الاجتماعية: </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>عازب</option>
                    <option>متزوج</option>
                    <option>مطلق</option>
                    <option>خاطب</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    value=""
                    style={{ display: "none" }}
                  />
                </div>
                <div className="box-content">
                  <label>الجنس:</label>
                  <select>
                    <option>-- اختر --</option>
                    <option>ذكر</option>
                    <option>انثى</option>
                  </select>
                </div>
                <div className="box-content">
                  <label>خدمة العلم: </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>منتهية</option>
                    <option>معفى</option>
                    <option>مؤجل</option>
                  </select>
                  <label style={{ display: "none" }}>تاريخ التأجيل</label>
                  <input
                    type="text"
                    name=""
                    value=""
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <label>رقم الهاتف: </label>
                  <input type="text" name="" value="" />
                  <select>
                    <option>دمشق(011)</option>
                    <option>حلب(021)</option>
                    <option>حمص(031)</option>
                    <option>اللاذقية(041)</option>
                    <option>طرطوس(043)</option>
                    <option>حماة(033)</option>
                    <option>إدلب(023)</option>
                    <option>الرقة(022)</option>
                    <option>الحسكة(052)</option>
                    <option>السويداء(016)</option>
                    <option>القنيطرة(014)</option>
                    <option>درعا(015)</option>
                    <option>دير الزور(051)</option>
                  </select>
                </div>
                <div className="box-content">
                  <label>رقم الجوال:</label>
                  <input type="phone" name="" value="" />
                </div>
                <div className="box-content">
                  <label>البلد:</label>
                  <select>
                    <option>سوريا</option>
                  </select>
                </div>
                <div className="box-content">
                  <label>المدينة: </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>دمشق</option>
                    <option>حلب</option>
                    <option>اللاذقية</option>
                    <option>حمص</option>
                    <option>حماة</option>
                    <option>طرطوس</option>
                    <option>جبلة</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    value=""
                    style={{ display: "none" }}
                  />
                </div>
                <div className="box-content">
                  <label>عنوان السكن الحالي :</label>
                  <input type="text" name="" value="" />
                </div>
                <div className="box-content">
                  <label>البريد الالكتروني:</label>
                  <input type="emil" name="" value="" />
                </div>
                <div className="box-content">
                  <label> الوظيفة المرغوبة: </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>المبيعات</option>
                    <option>الصيانة</option>
                    <option>أعمال ادارية</option>
                    <option>المحاسبة</option>
                    <option>الأتمتة والشبكات</option>
                    <option>أعمال مستودعية</option>
                    <option>غير ذلك</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    value=""
                    // style={{ display: "none" }}
                  />
                </div>
                <div className="box-content">
                  <label> شهادة السوق: </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>عامة</option>
                    <option>خاصة</option>
                    <option>لا يوجد</option>
                  </select>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <label>
                    الرقم الوطني <span> (الرقم الأمامي للبطاقة) :</span>
                  </label>
                  <input type="phone" name="" value="" />
                </div>
                <div className="box-content">
                  <label>
                    رقم بطاقة الهوية <span> (الرقم الخلفي للبطاقة) :</span>
                  </label>
                  <input type="phone" name="" value="" />
                </div>
                <div className="box-content">
                  <label>الأمانة والقيد:</label>
                  <input type="text" name="" value="" placeholder="ألأمانة" />
                  <input type="text" name="" value="" placeholder="القيد" />
                </div>
                <div className="box-content">
                  <label>الصورة الشخصية: </label>
                  <div>
                    <span>
                      يهمل الطلب في حال عدم اختيار صورة المتقدم الشخصية !
                    </span>
                  </div>
                  <input type="file" name="" value="" placeholder="تصفّح" />
                  <div>
                    <img src={AlYousserLogo} alt="image not avlible" />
                  </div>
                </div>
                <div className="box-content">
                  <label>كيف عرفت بوجود شاغر ؟ </label>
                  <select>
                    <option>-- اختر --</option>
                    <option>Showrooms</option>
                    <option>Friends</option>
                    <option>AlYousser WebSite</option>
                    <option>FaceBook</option>
                    <option>غير ذلك</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    value=""
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Certificates">
            <div className="headline">
              <h4>الشهادات: </h4>
            </div>
            <div className="Certificates-boxs">
              <div className="box-Certificates">
                <div className="box-content-Certificates">
                  <select>
                    <option>-- اختر الشهادة --</option>
                    <option>شهادة ثانوية أدبية</option>
                    <option>شهادة ثانوية علمية</option>
                    <option>شهادة ثانوية تجارية</option>
                    <option>شهادة معهد سنتين</option>
                    <option>شهادة معهد أربع سنوات</option>
                    <option>شهادة جامعية</option>
                    <option>شهادة معهد تقاني</option>
                    <option>شهادة إعدادية</option>
                    <option>شهادة ماجستير</option>
                    <option>شهادة دكتوراه</option>
                  </select>
                  <select>
                    <option>-- اختر المدرسة/الجامعة/المعهد --</option>
                    <option>جامعة دمشق</option>
                    <option>جامعة حلب</option>
                    <option>جامعة تشرين</option>
                    <option>جامعة البعث</option>
                    <option>غير ذلك </option>
                  </select>
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="اسم المدرسة/الجامعة"
                  />
                  <input type="text" value="" name="" placeholder="الاختصاص" />
                </div>
                <div className="box-content-Certificates">
                  <input type="text" value="" name="" placeholder="المدينة" />
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="سنة التخرج"
                  />
                  <input
                    type="checkbox"
                    value=""
                    name=""
                    placeholder="لم اتخرج"
                  />
                  <input type="text" name="" value="" />
                </div>
                <div className="box-content-Certificates">
                  <select>
                    <option>-- اختر الشهادة --</option>
                    <option>شهادة ثانوية أدبية</option>
                    <option>شهادة ثانوية علمية</option>
                    <option>شهادة ثانوية تجارية</option>
                    <option>شهادة معهد سنتين</option>
                    <option>شهادة معهد أربع سنوات</option>
                    <option>شهادة جامعية</option>
                    <option>شهادة معهد تقاني</option>
                    <option>شهادة إعدادية</option>
                    <option>شهادة ماجستير</option>
                    <option>شهادة دكتوراه</option>
                  </select>
                  <select>
                    <option>-- اختر المدرسة/الجامعة/المعهد --</option>
                    <option>جامعة دمشق</option>
                    <option>جامعة حلب</option>
                    <option>جامعة تشرين</option>
                    <option>جامعة البعث</option>
                    <option>غير ذلك </option>
                  </select>
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="اسم المدرسة/الجامعة"
                  />
                  <input type="text" value="" name="" placeholder="الاختصاص" />
                </div>
              </div>
              <div className="box-Certificates">
                <div className="box-content-Certificates">
                  <input type="text" value="" name="" placeholder="المدينة" />
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="سنة التخرج"
                  />
                  <input
                    type="checkbox"
                    value=""
                    name=""
                    placeholder="لم اتخرج"
                  />
                  <input type="text" name="" value="" />
                </div>
                <div className="box-content-Certificates">
                  <select>
                    <option>-- اختر الشهادة --</option>
                    <option>شهادة ثانوية أدبية</option>
                    <option>شهادة ثانوية علمية</option>
                    <option>شهادة ثانوية تجارية</option>
                    <option>شهادة معهد سنتين</option>
                    <option>شهادة معهد أربع سنوات</option>
                    <option>شهادة جامعية</option>
                    <option>شهادة معهد تقاني</option>
                    <option>شهادة إعدادية</option>
                    <option>شهادة ماجستير</option>
                    <option>شهادة دكتوراه</option>
                  </select>
                  <select>
                    <option>-- اختر المدرسة/الجامعة/المعهد --</option>
                    <option>جامعة دمشق</option>
                    <option>جامعة حلب</option>
                    <option>جامعة تشرين</option>
                    <option>جامعة البعث</option>
                    <option>غير ذلك </option>
                  </select>
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="اسم المدرسة/الجامعة"
                  />
                  <input type="text" value="" name="" placeholder="الاختصاص" />
                </div>
                <div className="box-content-Certificates">
                  <input type="text" value="" name="" placeholder="المدينة" />
                  <input
                    type="text"
                    value=""
                    name=""
                    placeholder="سنة التخرج"
                  />
                  <input
                    type="checkbox"
                    value=""
                    name=""
                    placeholder="لم اتخرج"
                  />
                  <input type="text" name="" value="" />
                </div>
              </div>
              <button>+</button>
            </div>
          </div>
          <div className="Languages">
            <div className="headline">
              <h4>اللغات: </h4>
            </div>
            <div className="Languages-boxs">
              <div className="Languages-box">
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- اختر اللغة --</option>
                  </select>
                  <div>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="اسم اللغة"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- اختر اللغة --</option>
                  </select>
                  <div>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="اسم اللغة"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- اختر اللغة --</option>
                  </select>
                  <div>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="اسم اللغة"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>

              <div className="Languages-box">
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- مستوى الكتابة --</option>
                  </select>
                  <select>
                    <option>-- مستوى القراءة --</option>
                  </select>
                  <select>
                    <option>-- مستوى التحدث --</option>
                  </select>
                </div>
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- مستوى الكتابة --</option>
                  </select>
                  <select>
                    <option>-- مستوى القراءة --</option>
                  </select>
                  <select>
                    <option>-- مستوى التحدث --</option>
                  </select>
                </div>
                <div className="box-contnet-Languages">
                  <select>
                    <option>-- مستوى الكتابة --</option>
                  </select>
                  <select>
                    <option>-- مستوى القراءة --</option>
                  </select>
                  <select>
                    <option>-- مستوى التحدث --</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="Computer-Skills">
            <div className="headline">
              <h4>مهارات الكمبيوتر:</h4>
            </div>
            <div className="box-Skills">
              <div className="box-program">
                <select>
                  <option>-- اختر البرنامج --</option>
                  <option>Word</option>
                  <option>Excel</option>
                  <option>Access</option>
                  <option>Outlook</option>
                  <option>Visual Studio</option>
                  <option>Sql Server</option>
                  <option>Android Studio</option>
                  <option>Photoshop</option>
                  <option>illustrator</option>
                  <option>AutoCad</option>
                  <option>غير ذلك</option>
                </select>
                <select>
                  <option>-- اختر البرنامج --</option>
                  <option>Word</option>
                  <option>Excel</option>
                  <option>Access</option>
                  <option>Outlook</option>
                  <option>Visual Studio</option>
                  <option>Sql Server</option>
                  <option>Android Studio</option>
                  <option>Photoshop</option>
                  <option>illustrator</option>
                  <option>AutoCad</option>
                  <option>غير ذلك</option>
                </select>
                <select>
                  <option>-- اختر البرنامج --</option>
                  <option>Word</option>
                  <option>Excel</option>
                  <option>Access</option>
                  <option>Outlook</option>
                  <option>Visual Studio</option>
                  <option>Sql Server</option>
                  <option>Android Studio</option>
                  <option>Photoshop</option>
                  <option>illustrator</option>
                  <option>AutoCad</option>
                  <option>غير ذلك</option>
                </select>
                <select>
                  <option>-- اختر البرنامج --</option>
                  <option>Word</option>
                  <option>Excel</option>
                  <option>Access</option>
                  <option>Outlook</option>
                  <option>Visual Studio</option>
                  <option>Sql Server</option>
                  <option>Android Studio</option>
                  <option>Photoshop</option>
                  <option>illustrator</option>
                  <option>AutoCad</option>
                  <option>غير ذلك</option>
                </select>
                {/* <input type="text" value="" name="" placeholder="الاختصاص" /> */}
              </div>
              <div className="box-program">
                <select>
                  <option>المستوى</option>
                  <option>مبتدأ</option>
                  <option>جيد</option>
                  <option>ممتاز</option>
                </select>
                <hr></hr>
                <select>
                  <option>المستوى</option>
                  <option>مبتدأ</option>
                  <option>جيد</option>
                  <option>ممتاز</option>
                </select>
                <hr></hr>
                <select>
                  <option>المستوى</option>
                  <option>مبتدأ</option>
                  <option>جيد</option>
                  <option>ممتاز</option>
                </select>
                <select>
                  <option>المستوى</option>
                  <option>مبتدأ</option>
                  <option>جيد</option>
                  <option>ممتاز</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Experiences">
            <div className="headline">
              <h4>الخبرات (من الأقدم إلى الأحدث) :</h4>
            </div>
            <div>
                <input type="checkbox" value="" name=""/>
                <label>لا يوجد خبرات سابقة</label>
            </div>
            <div className="boxs-Experiences">
              <div className="box-contnet-Experiences">
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="اسم الشركة" />
                  <input type="" name="" value="" placeholder="من التاريخ" />
                </div>
                <div className="box-contnet-Experiences-information">
                  <input type="text" name="" value="" placeholder="الوظيفة" />
                  <input
                    type="date"
                    name=""
                    value=""
                    placeholder="الى التاريخ"
                  />
                  <input type="checkbox" name="" value="" placeholder="" />
                  <label>مستمر حالياً</label>
                </div>
                <hr></hr>
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="اسم الشركة" />
                  <input type="" name="" value="" placeholder="من التاريخ" />
                </div>
                <div className="box-contnet-Experiences-information">
                  <input type="text" name="" value="" placeholder="الوظيفة" />
                  <input
                    type="date"
                    name=""
                    value=""
                    placeholder="الى التاريخ"
                  />
                  <input type="checkbox" name="" value="" placeholder="" />
                  <label>مستمر حالياً</label>
                </div>
                <hr></hr>
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="اسم الشركة" />
                  <input type="" name="" value="" placeholder="من التاريخ" />
                </div>
                <div className="box-contnet-Experiences-information">
                  <input type="text" name="" value="" placeholder="الوظيفة" />
                  <input
                    type="date"
                    name=""
                    value=""
                    placeholder="الى التاريخ"
                  />
                  <input type="checkbox" name="" value="" placeholder="" />
                  <label>مستمر حالياً</label>
                </div>
              </div>
              <div className="box-contnet-Experiences">
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="الراتب" />
                  <input
                    type=""
                    name=""
                    value=""
                    placeholder="معلومات للتواصل(رقم هاتف او بريد الكتروني)"
                  />
                </div>
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="الراتب" />
                  <input
                    type=""
                    name=""
                    value=""
                    placeholder="معلومات للتواصل(رقم هاتف او بريد الكتروني)"
                  />
                </div>
                <div className="box-contnet-Experiences-information">
                  <input type="" name="" value="" placeholder="الراتب" />
                  <input
                    type=""
                    name=""
                    value=""
                    placeholder="معلومات للتواصل(رقم هاتف او بريد الكتروني)"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="Training">
            <div className="headline">
              <h4>التدريب :</h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlYousser;
