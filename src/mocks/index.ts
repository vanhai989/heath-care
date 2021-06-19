import {
  IC_SICK,
  IC_LITTLE_WEAK,
  IC_NORMAL,
  IC_STRONGER,
  IC_VERY_STRONGER,
  IMG_DIET,
  IMG_FAKE_EXERCISE,
} from '../assets';
import {SICK, LITTLE_WEAK, NORMAL, VERY_STRONGER, STRONGER} from '../constants';
import {
  FOOD_EXPEDITED,
  FOOD_LIKE,
  FOOD_PROTEIN,
  FOOD_SIMPLE,
} from '../constants/diets';

const PhysicalState = [
  {
    id: 0,
    title: 'Kém',
    icon: IC_SICK,
    content:
      'Leo cầu thang thở dốc, ăn uống hấp thu kém, không luyện tập thể dục thể thao.',
    isActive: false,
    key: SICK,
  },
  {
    id: 1,
    title: 'Hơi kém',
    icon: IC_LITTLE_WEAK,
    content:
      'Chạy bộ thở dốc, ăn uống hấp thu kém, không luyện tập thể dục thể thao.',
    isActive: false,
    key: LITTLE_WEAK,
  },
  {
    id: 2,
    title: 'Bình thường',
    icon: IC_NORMAL,
    content: 'Hoạt động, ăn uống bình thường, ít luyện tập thể dục thể thao.',
    isActive: true,
    key: NORMAL,
  },
  {
    id: 3,
    title: 'Khoẻ',
    icon: IC_STRONGER,
    content: 'Luyện tập thể dục thể thao hằng ngày với cường độ vừa phải.',
    isActive: false,
    key: STRONGER,
  },
  {
    id: 4,
    title: 'Rất khỏe',
    icon: IC_VERY_STRONGER,
    content:
      'Luyện tập thể dục thể thao hằng ngày với cường độ vừa cao và bài tập khó.',
    isActive: false,
    key: VERY_STRONGER,
  },
];

const typeOfDish = [
  {
    id: 0,
    title: 'Tất cả các món',
    key: '',
  },
  {
    id: 1,
    title: 'Món ăn yêu thích',
    key: FOOD_LIKE,
  },
  {
    id: 2,
    title: 'Món ăn giảm cân cấp tốc',
    key: FOOD_EXPEDITED,
  },
  {
    id: 3,
    title: 'Món ăn nhiều protein',
    key: FOOD_PROTEIN,
  },
  {
    id: 4,
    title: 'Món ăn đơn giản',
    key: FOOD_SIMPLE,
  },
];

const diets = [
  {
    id: 1,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 0,
    image: IMG_DIET,
  },
  {
    id: 2,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 1,
    image: IMG_DIET,
  },
  {
    id: 3,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 2,
    image: IMG_DIET,
  },
  {
    id: 4,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 3,
    image: IMG_DIET,
  },
  {
    id: 5,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 4,
    image: IMG_DIET,
  },
  {
    id: 6,
    name: 'Cơm đùi gà quay',
    calo: 400,
    heart: 500,
    star: 5,
    image: IMG_DIET,
  },
];

const news = [
  {
    title: 'Tập luyện 8 tuần để có vòng eo 56',
    image_url_list: `https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
      https://vietnamforestry.org.vn/wp-content/uploads/2019/11/dau-da-day-co-nen-tap-gym.jpg,
      https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg,
      https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
      https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg`,
    description:
      'Ngoài thay đổi chế độ ăn uống hàng ngày, bạn cũng cần quan tâm nhiều hơn tới chuyện tập….',
    id: 1,
    total_like: '1',
    total_views: '1',
  },
  {
    title: 'Tập luyện 8 tuần để có vòng eo 56',
    image_url_list: `https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://vietnamforestry.org.vn/wp-content/uploads/2019/11/dau-da-day-co-nen-tap-gym.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg,
    https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg`,
    description:
      'Ngoài thay đổi chế độ ăn uống hàng ngày, bạn cũng cần quan tâm nhiều hơn tới chuyện tập….',
    id: 2,
    total_like: '2',
    total_views: '2',
  },
  {
    title: 'Tập luyện 8 tuần để có vòng eo 56',
    image_url_list: `https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://vietnamforestry.org.vn/wp-content/uploads/2019/11/dau-da-day-co-nen-tap-gym.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg,
    https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg`,
    description:
      'Ngoài thay đổi chế độ ăn uống hàng ngày, bạn cũng cần quan tâm nhiều hơn tới chuyện tập….',
    id: 3,
    total_like: '3',
    total_views: '3',
  },
  {
    title: 'Tập luyện 8 tuần để có vòng eo 56',
    image_url_list: `https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://vietnamforestry.org.vn/wp-content/uploads/2019/11/dau-da-day-co-nen-tap-gym.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg,
    https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg`,
    content:
      'Ngoài thay đổi chế độ ăn uống hàng ngày, bạn cũng cần quan tâm nhiều hơn tới chuyện tập….',
    id: 4,
    total_like: '4',
    total_views: '4',
  },
  {
    title: 'Tập luyện 8 tuần để có vòng eo 56',
    image_url_list: `https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://vietnamforestry.org.vn/wp-content/uploads/2019/11/dau-da-day-co-nen-tap-gym.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg,
    https://vinmec-prod.s3.amazonaws.com/images/20190719_101642_204052_tap-gym.max-800x800.jpg,
    https://mmagym.vn/wp-content/uploads/2020/03/mma-gym-fitness-center-514.jpg`,
    description:
      'Ngoài thay đổi chế độ ăn uống hàng ngày, bạn cũng cần quan tâm nhiều hơn tới chuyện tập….',
    id: 4,
    total_like: '4',
    total_views: '4',
  },
];

const dietDetail = {
  time: 35,
  description:
    'Trời oi nóng mấy mà bữa ăn có món sườn rim kiểu này chồng con đánh bay cả nồi cơm. Chỉ vài bước đơn giản là bạn đã có ngay món sườn rim đậm đà để ăn với cơm rồi.',
  cookingGuide: [
    'Sườn chặt miếng vừa ăn, rửa sạch với nước.',
    'Cho nước lạnh vào nồi, thêm sườn và hai lát gừng, và đun sôi nước. Hai phút sau khi đun sôi, đổ sườn ra rửa sạch',
    'Sau đó thêm nước tương và rượu nấu ăn vào, đảo đều. Thêm đường phèn và lá nguyệt quế sau đó thêm nước nóng vừa đủ. Đậy nắp nồi và đun nhỏ lửa trong 30 phút ở nhiệt độ thấp. Sau 30 phút, nước cạn sền sệt, nêm muối cho vừa miệng.',
  ],
  recipeList: [
    '500g sườn heo ngon',
    '1 cánh hoa hồi',
    '2 lá nguyệt quế',
    '10 viên đường phèn nhỏ',
  ],
};

const ExerciseDetail = [
  {
    id: 1,
    title: 'Quick-Hit Abs1',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    id: 2,
    title: 'Quick-Hit Abs2',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    id: 3,
    title: 'Quick-Hit Abs3',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    id: 4,
    title: 'Quick-Hit Abs4',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    title: 'Quick-Hit Abs5',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    id: 5,
    title: 'Quick-Hit Abs6',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
  {
    id: 6,
    title: 'Quick-Hit Abs7',
    image: IMG_FAKE_EXERCISE,
    video: 'https://pic.pikbest.com/00/44/11/119888piCY5j.mp4',
  },
];

const ExerciseList = [
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: true,
  },
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: false,
  },
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: false,
  },
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: false,
  },
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: false,
  },
  {
    id: 0,
    name: 'Quick-Hit Abs',
    image:
      'https://exerciseright.com.au/wp-content/uploads/2020/05/image-from-rawpixel-id-2107431-jpeg-compressed.jpg',
    total_items: 10,
    isFinish: false,
  },
];

const Slogan = [
  'Hãy khiến cho những người thân của bạn phải tự hào, và những người chẳng may không thích bạn phải uất lên vì ghen tị với cơ thể của bạn',
  'Phải mất 4 tuần bạn mới nhận ra cơ thể mình đang thay đổi. 8 tuần để các cô bạn thân và gia đình bắt đầu trầm trồ. Và 12 tuần là thời điểm cả thế giới sẽ kinh ngạc nhìn bạn. Cho nên, hãy tiếp tục cố gắng nhé!',
  'Tôi chẳng có gì để mất, ngoài đống mỡ này cả!',
  'Đừng an phận là một viên sỏi trong bạn thực chất là một viên đá quý.',
  'Tôi đang làm việc đó cho tôi.',
  'Tôi có khả năng nhiều hơn tôi biết.',
  'Tiến bộ là tiến bộ.',
  'Mấy cô nàng sinh ra đã ốm thì thật may mắn! Nhưng những cô gái phải vất vả để có được thân hình thon gọn ấy còn mạnh mẽ hơn nhiều.',
  'Cái khó nhất của việc tập luyện là bắt đầu. Một khi đã vào guồng thì dừng lại mới là cái khó nhất',
  'Một khi muốn thay đổi. Hãy chắc chắn rằng bạn làm như vậy là vì bản thân mình.',
  'Phải mất 4 tuần bạn mới nhận ra cơ thể mình đang thay đổi. 8 tuần để các cô bạn thân và gia đình bắt đầu trầm trồ. Và 12 tuần là thời điểm cả thế giới sẽ kinh ngạc nhìn bạn. Cho nên, hãy tiếp tục cố gắng nhé!',
  'Luôn nhớ rằng, dù bạn có ăn uống thế nào khi ở một mình thì khi ra ngoài, cả thiên hạ đều biết được đấy!',
  'Tôi trong tương lai sẽ cảm ơn tôi hiện tại.',
  'Sự tự tin nuôi dưỡng cái đẹp trong mỗi chúng ta.',
  'Nếu bạn không thử. Bạn sẽ không bao giờ biết được. Bạn có thể làm những gì.',
  'Thời gian là để tạo ra điều gì đó. Khi bạn nói TÔI KHÔNG CÓ THỜI GIAN đồng nghĩa với việc bạn nói TÔI KHÔNG MUỐN LÀM ĐIỀU ĐÓ.',
  'Mỗi ngày sẽ giảm cân một chút',
  'Tôi trong tương lai sẽ cảm ơn tôi.',
  'Hôm nay là một ngày mới.',
  'Tôi biết làm thế nào để bản thân đẹp hơn và tôi muốn làm điều này',
  'Tôi không hoàn toàn thích những thứ về bản thân mình, tôi đang cố gắng yêu thương bản thân mình hơn',
  'Hãy nhìn những gì tôi đã đi. Hãy nhìn cách tôi có thể đi.',
  'Tôi sẽ không để cho tâm trí của tôi bắt nạt cơ thể của tôi.',
  'Để có thể thành công, bạn buộc phải tin rằng bạn có thể',
  'Không có gì là không thể với một người luôn biết cố gắng.',
  'Nghĩ quá nhiều sẽ hủy hoại bạn. Hủy hoại thực tại, thay đổi mọi thứ xung quanh, khiến bạn lo lắng và làm mọi thứ trở nên tồi tệ hơn bạn nghĩ',
  'Hãy luyện tập như thể bạn chưa bao giờ chiến thắng. Hãy hành động như thể chưa bao giờ bạn thất bại',
  'Chỉ cần bạn không dừng lại thì việc bạn tiến chậm cũng không là vấn đề.',
  'Cách để bắt đầu đó là dừng việc nói lại và hãy bắt đầu làm',
  'Không bao giờ, không bao giờ, không bao giờ từ bỏ',
];

export {
  PhysicalState,
  diets,
  news,
  typeOfDish,
  dietDetail,
  ExerciseList,
  ExerciseDetail,
  Slogan,
};
