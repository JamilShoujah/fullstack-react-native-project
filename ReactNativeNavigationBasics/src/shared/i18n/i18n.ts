import {observable, runInAction} from 'mobx';
import {TI18n, TLanguage} from '../../data/types/types/i18nTypes';
import {TLanguageEnum} from '../../data/types/enums/languageEnum';

export function reduce<O>(
  reducer: () => O,
  defaultTo: Exclude<O, undefined | null>,
): Exclude<O, undefined | null> {
  type ReturnType = Exclude<O, undefined | null>;
  try {
    const returnValue = reducer();
    if (returnValue === undefined || returnValue === null) {
      return defaultTo;
    } else {
      return returnValue as ReturnType;
    }
  } catch (err) {
    return defaultTo;
  }
}

const i18n: TI18n = {
  language: observable.box<TLanguage>('LANG_NOT_SET'),
  LG: {
    WELCOME: {
      AR: 'مرحباً',
      EN: 'Welcome',
      JP: 'ようこそ',
    },
    LOGIN: {
      AR: 'تسجيل الدخول',
      EN: 'Login',
      JP: 'ログイン',
    },
    PROFILE: {
      AR: 'الملف الشخصي',
      EN: 'Profile',
      JP: 'プロフィール',
    },
    FULL_NAME: {
      AR: 'الإسم الكامل',
      EN: 'Full Name',
      JP: 'フルネーム',
    },
    EMAIL: {
      AR: 'البريد الألكتروني',
      EN: 'Email',
      JP: 'Eメールアドレス',
    },
    AGE: {
      AR: 'عمرك',
      EN: 'Age',
      JP: '年',
    },
    GENDER: {
      AR: 'جنس',
      EN: 'Gender',
      JP: '性別',
    },
    RELIGION: {
      AR: 'ديانة',
      EN: 'Religion',
      JP: '宗教',
    },
    PEER_VIEW: {
      AR: 'أصدقاء',
      EN: 'Friends',
      JP: '友達',
    },
    PASSWORD: {
      AR: 'كلمة المرور',
      EN: 'Password',
      JP: 'パスワード',
    },
    NO_ACCOUNT: {
      AR: 'ليس لديك حساب؟',
      EN: 'Don’t have an account?',
      JP: 'アカウントをお持ちでない方は、こちら',
    },
    SIGN_UP_HERE: {
      AR: 'هنا للتسجيل',
      EN: 'Sign up here.',
      JP: 'こちらから登録してください。',
    },
    VERIFY_PASSWORD: {
      AR: 'تأكيد كلمة المرور',
      EN: 'Verify Password',
      JP: 'パスワード確認',
    },
    HAVE_ACCOUNT: {
      AR: 'لديك حساب؟',
      EN: 'Already have an account?',
      JP: '既にアカウントをお持ちの方は、こちら',
    },
    WARNING: {
      AR: 'تنبيه!',
      EN: 'Warning!',
      JP: '注意！',
    },
    FIRST_NAME: {
      AR: 'الإسم الأول',
      EN: 'First Name',
      JP: '名',
    },
    LAST_NAME: {
      AR: 'الإسم الأخير',
      EN: 'Last Name',
      JP: '姓',
    },
    MALE: {
      AR: 'رجل',
      EN: 'Male',
      JP: '男性',
    },
    FEMALE: {
      AR: 'أنثى',
      EN: 'Female',
      JP: '女性',
    },
    NON_BINARY: {
      AR: 'غير ثنائي',
      EN: 'Non-binary',
      JP: 'ノンバイナリー',
    },
    ATTACK_HELICOPTER: {
      AR: 'مروحية الهجوم',
      EN: 'Attack Helicopter',
      JP: '攻撃ヘリコプター',
    },
    WALMART_BAG: {
      AR: 'حقيبة ولمارت',
      EN: 'Walmart Bag',
      JP: 'ウォルマートバグ',
    },
    ONE_OF_THE_GENDERS: {
      AR: 'أحد الأجناس الـ200',
      EN: 'One of the 200+ genders',
      JP: '200以上のジェンダーの1つ',
    },
    ISLAM: {
      AR: 'الإسلام',
      EN: 'Islam',
      JP: 'イスラム教',
    },
    CHRISTIANITY: {
      AR: 'المسيحية',
      EN: 'Christianity',
      JP: 'キリスト教',
    },
    JUDAISM: {
      AR: 'اليهودية',
      EN: 'Judaism',
      JP: 'ユダヤ教',
    },
    BUDDHISM: {
      AR: 'البوذية',
      EN: 'Buddhism',
      JP: '仏教',
    },
    HINDUISM: {
      AR: 'الهندوسية',
      EN: 'Hinduism',
      JP: 'ヒンドゥー教',
    },
    ATHEISM: {
      AR: 'الإلحاد',
      EN: 'Atheism',
      JP: '無神論',
    },
    TELL_US_MORE: {
      AR: 'أخبرنا المزيد عن نفسك',
      EN: 'Tell us more!',
      JP: '自己紹介をお願いします',
    },
    SUBMIT: {
      AR: 'إرسل',
      EN: 'Submit',
      JP: '送信',
    },
  },

  setLanguage(language: TLanguage) {
    runInAction(() => {
      this.language.set(language);
    });
  },
  get(message: string) {
    const languageRaw = this.language.get();
    const language =
      !languageRaw || languageRaw === TLanguageEnum.LANG_NOT_SET
        ? TLanguageEnum.ENGLISH
        : languageRaw;
    const translationText = reduce(() => this.LG[message][language], '');
    return !translationText ? message : translationText;
  },
};

export default i18n;
