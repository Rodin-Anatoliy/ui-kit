/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';

import { Container, StyledIcon } from './Icon.styles';

export enum IconNames {
  test = 'test',
  chevronDown = 'chevronDown',
  chevronUp = 'chevronUp',
  chevronLeft = 'chevronLeft',
  chevronRight = 'chevronRight',
  warning = 'warning',
  smile = 'smile',
  smileMeh = 'smileMeh',
  smileSad = 'smileSad',
  smileWink = 'smileWink',
  smileXEyes = 'smileXEyes',
  star = 'star',
  starFilled = 'starFilled',
  image = 'image',
  imageFilled = 'imageFilled',
  student = 'student',
  studentFilled = 'studentFilled',
  home = 'home',
  homeFilled = 'homeFilled',
  achievements = 'achievements',
  activity = 'activity',
  activityFilled = 'activityFilled',
  activityFilledMin = 'activityFilledMin',
  arrow = 'arrow',
  boldArrow = 'boldArrow',
  book = 'book',
  camera = 'camera',
  campaign = 'campaign',
  campaignFilled = 'campaignFilled',
  category = 'category',
  checklist = 'checklist',
  checklistFilled = 'checklistFilled',
  drag = 'drag',
  dot = 'dot',
  events = 'events',
  friends = 'friends',
  friendsFilled = 'friendsFilled',
  game = 'game',
  gender = 'gender',
  messages = 'messages',
  messagesFilled = 'messagesFilled',
  mic = 'mic',
  pause = 'pause',
  personal = 'personal',
  personalFilled = 'personalFilled',
  play = 'play',
  players = 'players',
  secure = 'secure',
  secureFilled = 'secureFilled',
  secureOpen = 'secureOpen',
  secureOpenFilled = 'secureOpenFilled',
  settings = 'settings',
  settingsFilled = 'settingsFilled',
  stop = 'stop',
  system = 'system',
  systemFilled = 'systemFilled',
  threeDots = 'threeDots',
  tombstone = 'tombstone',
  tombstoneFilled = 'tombstoneFilled',
  viewFilled = 'viewFilled',
  viewFilledAlt = 'viewFilledAlt',
  cross = 'cross',
  paperClip = 'paperClip',
  checkbox = 'checkbox',
  triangleDown = 'triangleDown',
  checkMark = 'checkMark',
  minus = 'minus',
  radioMark = 'radioMark',
  basket = 'basket',
  plus = 'plus',
  arrowBottom = 'arrowBottom',
  scale = 'scale',
  scaleToMin = 'scaleToMin',
  attachment = 'attachment',
  exit = 'exit',
  timer = 'timer',
  search = 'search',
  repeat = 'repeat',
  share = 'share',
}

type TIconSize = 'large' | 'medium' | 'small';

interface IIconProps {
  name: IconNames;
  size?: TIconSize;
  color?: string;
}

interface IIconsDictProps {
  src: string;
  width?: string;
  height?: string;
  color: string;
}

const iconsDict: { [key in IconNames]: IIconsDictProps } = {
  [IconNames.test]: {
    src: require('../../assets/icons/test.svg'),
    color: '#7B7B7B',
  },
  [IconNames.chevronDown]: {
    src: require('../../assets/icons/chevron-down.svg'),
    color: '#7B7B7B',
  },
  [IconNames.chevronUp]: {
    src: require('../../assets/icons/chevron-up.svg'),
    color: '#7B7B7B',
  },
  [IconNames.chevronLeft]: {
    src: require('../../assets/icons/chevron-left.svg'),
    color: '#7B7B7B',
  },
  [IconNames.chevronRight]: {
    src: require('../../assets/icons/chevron-right.svg'),
    color: '#7B7B7B',
  },
  [IconNames.warning]: {
    src: require('../../assets/icons/warning.svg'),
    color: '#7B7B7B',
  },
  [IconNames.smile]: {
    src: require('../../assets/icons/smile.svg'),
    color: '#7B7B7B',
  },
  [IconNames.smileMeh]: {
    src: require('../../assets/icons/smile_meh.svg'),
    color: '#7B7B7B',
  },
  [IconNames.smileSad]: {
    src: require('../../assets/icons/smile_sad.svg'),
    color: '#7B7B7B',
  },
  [IconNames.smileWink]: {
    src: require('../../assets/icons/smile_wink.svg'),
    color: '#7B7B7B',
  },
  [IconNames.smileXEyes]: {
    src: require('../../assets/icons/smile-x-eyes.svg'),
    color: '#7B7B7B',
  },
  [IconNames.star]: {
    src: require('../../assets/icons/star.svg'),
    color: '#7B7B7B',
  },
  [IconNames.starFilled]: {
    src: require('../../assets/icons/star-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.image]: {
    src: require('../../assets/icons/image.svg'),
    color: '#7B7B7B',
  },
  [IconNames.imageFilled]: {
    src: require('../../assets/icons/image-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.student]: {
    src: require('../../assets/icons/student.svg'),
    color: '#7B7B7B',
  },
  [IconNames.studentFilled]: {
    src: require('../../assets/icons/student-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.home]: {
    src: require('../../assets/icons/home.svg'),
    color: '#7B7B7B',
  },
  [IconNames.homeFilled]: {
    src: require('../../assets/icons/home-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.achievements]: {
    src: require('../../assets/icons/achievements.svg'),
    color: '#7B7B7B',
  },
  [IconNames.activity]: {
    src: require('../../assets/icons/activity.svg'),
    color: '#7B7B7B',
  },
  [IconNames.activityFilled]: {
    src: require('../../assets/icons/activity-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.activityFilledMin]: {
    src: require('../../assets/icons/activity-filled-min.svg'),
    color: '#7B7B7B',
  },
  [IconNames.arrow]: {
    src: require('../../assets/icons/arrow-top-left.svg'),
    color: '#7B7B7B',
  },
  [IconNames.book]: {
    src: require('../../assets/icons/book.svg'),
    color: '#7B7B7B',
  },
  [IconNames.camera]: {
    src: require('../../assets/icons/camera.svg'),
    color: '#7B7B7B',
  },
  [IconNames.campaign]: {
    src: require('../../assets/icons/campaign.svg'),
    color: '#7B7B7B',
  },
  [IconNames.campaignFilled]: {
    src: require('../../assets/icons/campaign-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.category]: {
    src: require('../../assets/icons/category.svg'),
    color: '#7B7B7B',
  },
  [IconNames.checklist]: {
    src: require('../../assets/icons/checklist.svg'),
    color: '#7B7B7B',
  },
  [IconNames.checklistFilled]: {
    src: require('../../assets/icons/checklist-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.drag]: {
    src: require('../../assets/icons/drag.svg'),
    color: '#7B7B7B',
  },
  [IconNames.dot]: {
    src: require('../../assets/icons/dot.svg'),
    color: '#7B7B7B',
  },
  [IconNames.events]: {
    src: require('../../assets/icons/events.svg'),
    color: '#7B7B7B',
  },
  [IconNames.friends]: {
    src: require('../../assets/icons/friends.svg'),
    color: '#7B7B7B',
  },
  [IconNames.friendsFilled]: {
    src: require('../../assets/icons/friends-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.game]: {
    src: require('../../assets/icons/game.svg'),
    color: '#7B7B7B',
  },
  [IconNames.gender]: {
    src: require('../../assets/icons/gender.svg'),
    color: '#7B7B7B',
  },
  [IconNames.messages]: {
    src: require('../../assets/icons/messages.svg'),
    color: '#7B7B7B',
  },
  [IconNames.messagesFilled]: {
    src: require('../../assets/icons/messages-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.mic]: {
    src: require('../../assets/icons/mic.svg'),
    color: '#7B7B7B',
  },
  [IconNames.pause]: {
    src: require('../../assets/icons/pause.svg'),
    color: '#7B7B7B',
  },
  [IconNames.personal]: {
    src: require('../../assets/icons/personal.svg'),
    color: '#7B7B7B',
  },
  [IconNames.personalFilled]: {
    src: require('../../assets/icons/personal-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.play]: {
    src: require('../../assets/icons/play.svg'),
    color: '#7B7B7B',
  },
  [IconNames.players]: {
    src: require('../../assets/icons/players.svg'),
    color: '#7B7B7B',
  },
  [IconNames.secure]: {
    src: require('../../assets/icons/secure.svg'),
    color: '#7B7B7B',
  },
  [IconNames.secureFilled]: {
    src: require('../../assets/icons/secure-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.secureOpen]: {
    src: require('../../assets/icons/secure-open.svg'),
    color: '#7B7B7B',
  },
  [IconNames.secureOpenFilled]: {
    src: require('../../assets/icons/secure-open-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.settings]: {
    src: require('../../assets/icons/settings.svg'),
    color: '#7B7B7B',
  },
  [IconNames.settingsFilled]: {
    src: require('../../assets/icons/settings-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.stop]: {
    src: require('../../assets/icons/stop.svg'),
    color: '#7B7B7B',
  },
  [IconNames.system]: {
    src: require('../../assets/icons/system.svg'),
    color: '#7B7B7B',
  },
  [IconNames.systemFilled]: {
    src: require('../../assets/icons/system-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.threeDots]: {
    src: require('../../assets/icons/three-dots.svg'),
    color: '#7B7B7B',
  },
  [IconNames.tombstone]: {
    src: require('../../assets/icons/tombstone.svg'),
    color: '#7B7B7B',
  },
  [IconNames.tombstoneFilled]: {
    src: require('../../assets/icons/tombstone-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.viewFilled]: {
    src: require('../../assets/icons/view-filled.svg'),
    color: '#7B7B7B',
  },
  [IconNames.viewFilledAlt]: {
    src: require('../../assets/icons/view-filled-alt.svg'),
    color: '#7B7B7B',
  },
  [IconNames.cross]: {
    src: require('../../assets/icons/cross.svg'),
    color: '#7B7B7B',
  },
  [IconNames.checkMark]: {
    src: require('../../assets/icons/check-mark.svg'),
    color: 'black',
  },
  [IconNames.minus]: {
    src: require('../../assets/icons/minus.svg'),
    color: 'black',
  },
  [IconNames.radioMark]: {
    src: require('../../assets/icons/radio-mark.svg'),
    color: 'black',
  },
  [IconNames.paperClip]: {
    src: require('../../assets/icons/paper-clip.svg'),
    color: 'black',
  },
  [IconNames.checkbox]: {
    src: require('../../assets/icons/checkbox.svg'),
    color: 'black',
  },
  [IconNames.triangleDown]: {
    src: require('../../assets/icons/triangle-down.svg'),
    color: 'black',
  },
  [IconNames.basket]: {
    src: require('../../assets/icons/basket.svg'),
    color: '#7B7B7B',
  },
  [IconNames.plus]: {
    src: require('../../assets/icons/plus.svg'),
    color: '#7B7B7B',
  },
  [IconNames.boldArrow]: {
    src: require('../../assets/icons/bold-arrow.svg'),
    color: '#7B7B7B',
  },
  [IconNames.arrowBottom]: {
    src: require('../../assets/icons/arrow-bottom.svg'),
    color: '#7B7B7B',
  },
  [IconNames.scale]: {
    src: require('../../assets/icons/scale.svg'),
    color: '#7B7B7B',
  },
  [IconNames.scaleToMin]: {
    src: require('../../assets/icons/scale-to-min.svg'),
    color: '#7B7B7B',
  },
  [IconNames.attachment]: {
    src: require('../../assets/icons/attachment.svg'),
    color: '#7B7B7B',
  },
  [IconNames.exit]: {
    src: require('../../assets/icons/exit.svg'),
    color: '#7B7B7B',
  },
  [IconNames.timer]: {
    src: require('../../assets/icons/timer.svg'),
    color: '#7B7B7B',
  },
  [IconNames.search]: {
    src: require('../../assets/icons/search.svg'),
    color: '#7B7B7B',
  },
  [IconNames.repeat]: {
    src: require('../../assets/icons/repeat.svg'),
    color: '#7B7B7B',
  },
  [IconNames.share]: {
    src: require('../../assets/icons/share.svg'),
    color: '#7B7B7B',
  },
};

const Icon: React.FC<IIconProps & React.HTMLAttributes<HTMLDivElement>> = ({
  name,
  size,
  color,
  ...props
}) => {
  const icon = iconsDict[name];

  return (
    <Container size={size} {...props}>
      <StyledIcon
        width={icon?.width ? icon?.width : '100%'}
        height={icon?.height ? icon?.height : '100%'}
        color={color ? color : icon?.color}
        src={icon.src}
      />
    </Container>
  );
};

export { Icon, iconsDict };
export type { IIconProps, IIconsDictProps };
