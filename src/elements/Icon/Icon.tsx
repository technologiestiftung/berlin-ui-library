import { cn } from "@/lib/utils";
import { ComponentType, SVGProps } from "react";

// Auto-generated imports - do not edit manually
import ArrowDownIcon from "@/assets/icons/arrow-down.svg?react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg?react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg?react";
import BarsIcon from "@/assets/icons/bars.svg?react";
import CalendarIcon from "@/assets/icons/calendar.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import CheckCircleIcon from "@/assets/icons/check-circle.svg?react";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import ChevronUpIcon from "@/assets/icons/chevron-up.svg?react";
import CircleDownIcon from "@/assets/icons/circle-down.svg?react";
import ClockIcon from "@/assets/icons/clock.svg?react";
import ClockCircleIcon from "@/assets/icons/clock-circle.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";
import CommentIcon from "@/assets/icons/comment.svg?react";
import CommentDotsIcon from "@/assets/icons/comment-dots.svg?react";
import CommentsIcon from "@/assets/icons/comments.svg?react";
import DesktopIcon from "@/assets/icons/desktop.svg?react";
import DgsIcon from "@/assets/icons/dgs.svg?react";
import DownloadIcon from "@/assets/icons/download.svg?react";
import EditIcon from "@/assets/icons/edit.svg?react";
import EnvelopeIcon from "@/assets/icons/envelope.svg?react";
import ErrorIcon from "@/assets/icons/error.svg?react";
import EuroSignIcon from "@/assets/icons/euro-sign.svg?react";
import ExternalLinkIcon from "@/assets/icons/external-link.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import FaxIcon from "@/assets/icons/fax.svg?react";
import FilterIcon from "@/assets/icons/filter.svg?react";
import FlickrIcon from "@/assets/icons/flickr.svg?react";
import HeartIcon from "@/assets/icons/heart.svg?react";
import InfoIcon from "@/assets/icons/info.svg?react";
import InfoCircleIcon from "@/assets/icons/info-circle.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import LandmarkIcon from "@/assets/icons/landmark.svg?react";
import LeichteSpracheIcon from "@/assets/icons/leichte-sprache.svg?react";
import LinkIcon from "@/assets/icons/link.svg?react";
import LockIcon from "@/assets/icons/lock.svg?react";
import LockOpenIcon from "@/assets/icons/lock-open.svg?react";
import LoginIcon from "@/assets/icons/login.svg?react";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import MapIcon from "@/assets/icons/map.svg?react";
import MapMarkerIcon from "@/assets/icons/map-marker.svg?react";
import MobileIcon from "@/assets/icons/mobile.svg?react";
import PauseIcon from "@/assets/icons/pause.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";
import PinterestIcon from "@/assets/icons/pinterest.svg?react";
import PlayIcon from "@/assets/icons/play.svg?react";
import PrintIcon from "@/assets/icons/print.svg?react";
import QuoteLeftIcon from "@/assets/icons/quote-left.svg?react";
import RightIcon from "@/assets/icons/right.svg?react";
import RssIcon from "@/assets/icons/rss.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import SeedingIcon from "@/assets/icons/seeding.svg?react";
import SnapchatIcon from "@/assets/icons/snapchat.svg?react";
import SquareBlueskyIcon from "@/assets/icons/square-bluesky.svg?react";
import SquareFacebookIcon from "@/assets/icons/square-facebook.svg?react";
import SquareInstagramIcon from "@/assets/icons/square-instagram.svg?react";
import SquareLinkedinIcon from "@/assets/icons/square-linkedin.svg?react";
import SquareThreadsIcon from "@/assets/icons/square-threads.svg?react";
import SquareXTwitterIcon from "@/assets/icons/square-x-twitter.svg?react";
import SquareXingIcon from "@/assets/icons/square-xing.svg?react";
import SquareYoutubeIcon from "@/assets/icons/square-youtube.svg?react";
import StarIcon from "@/assets/icons/star.svg?react";
import StarHalfStrokeIcon from "@/assets/icons/star-half-stroke.svg?react";
import StarSolidIcon from "@/assets/icons/star-solid.svg?react";
import SuccessIcon from "@/assets/icons/success.svg?react";
import TabletIcon from "@/assets/icons/tablet.svg?react";
import ThreadsIcon from "@/assets/icons/threads.svg?react";
import TicketIcon from "@/assets/icons/ticket.svg?react";
import TimesIcon from "@/assets/icons/times.svg?react";
import TimesCircleIcon from "@/assets/icons/times-circle.svg?react";
import TrashIcon from "@/assets/icons/trash.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import UniversalAccessIcon from "@/assets/icons/universal-access.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import UserCheckIcon from "@/assets/icons/user-check.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import XTwitterIcon from "@/assets/icons/x-twitter.svg?react";

// Icon registry - auto-generated from SVG files
const icons = {
	"arrow-down": ArrowDownIcon,
	"arrow-left": ArrowLeftIcon,
	"arrow-right": ArrowRightIcon,
	"arrow-up": ArrowUpIcon,
	bars: BarsIcon,
	calendar: CalendarIcon,
	cart: CartIcon,
	"check-circle": CheckCircleIcon,
	"chevron-down": ChevronDownIcon,
	"chevron-right": ChevronRightIcon,
	"chevron-up": ChevronUpIcon,
	"circle-down": CircleDownIcon,
	clock: ClockIcon,
	"clock-circle": ClockCircleIcon,
	close: CloseIcon,
	comment: CommentIcon,
	"comment-dots": CommentDotsIcon,
	comments: CommentsIcon,
	desktop: DesktopIcon,
	dgs: DgsIcon,
	download: DownloadIcon,
	edit: EditIcon,
	envelope: EnvelopeIcon,
	error: ErrorIcon,
	"euro-sign": EuroSignIcon,
	"external-link": ExternalLinkIcon,
	facebook: FacebookIcon,
	fax: FaxIcon,
	filter: FilterIcon,
	flickr: FlickrIcon,
	heart: HeartIcon,
	info: InfoIcon,
	"info-circle": InfoCircleIcon,
	instagram: InstagramIcon,
	landmark: LandmarkIcon,
	"leichte-sprache": LeichteSpracheIcon,
	link: LinkIcon,
	lock: LockIcon,
	"lock-open": LockOpenIcon,
	login: LoginIcon,
	logout: LogoutIcon,
	map: MapIcon,
	"map-marker": MapMarkerIcon,
	mobile: MobileIcon,
	pause: PauseIcon,
	phone: PhoneIcon,
	pinterest: PinterestIcon,
	play: PlayIcon,
	print: PrintIcon,
	"quote-left": QuoteLeftIcon,
	right: RightIcon,
	rss: RssIcon,
	search: SearchIcon,
	seeding: SeedingIcon,
	snapchat: SnapchatIcon,
	"square-bluesky": SquareBlueskyIcon,
	"square-facebook": SquareFacebookIcon,
	"square-instagram": SquareInstagramIcon,
	"square-linkedin": SquareLinkedinIcon,
	"square-threads": SquareThreadsIcon,
	"square-x-twitter": SquareXTwitterIcon,
	"square-xing": SquareXingIcon,
	"square-youtube": SquareYoutubeIcon,
	star: StarIcon,
	"star-half-stroke": StarHalfStrokeIcon,
	"star-solid": StarSolidIcon,
	success: SuccessIcon,
	tablet: TabletIcon,
	threads: ThreadsIcon,
	ticket: TicketIcon,
	times: TimesIcon,
	"times-circle": TimesCircleIcon,
	trash: TrashIcon,
	twitter: TwitterIcon,
	"universal-access": UniversalAccessIcon,
	user: UserIcon,
	"user-check": UserCheckIcon,
	whatsapp: WhatsappIcon,
	x: XIcon,
	"x-twitter": XTwitterIcon,
} as const;

export type IconName = keyof typeof icons;

export interface IconProps {
	/**
	 * The icon name
	 */
	name: IconName;
	/**
	 * Additional CSS classes for styling the icon (use size-* for dimensions, text-* for colors)
	 */
	className?: string;
	/**
	 * Accessible label for screen readers
	 */
	"aria-label"?: string;
	/**
	 * Whether to hide the icon from screen readers (default: true)
	 */
	"aria-hidden"?: boolean;
}

export function Icon({
	name,
	className,
	"aria-label": ariaLabel,
	"aria-hidden": ariaHidden = true,
}: IconProps) {
	const IconComponent = icons[name] as ComponentType<SVGProps<SVGSVGElement>>;

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found`);
		return null;
	}

	return (
		<IconComponent
			className={cn("inline-block", className)}
			aria-label={ariaLabel}
			aria-hidden={ariaHidden}
		/>
	);
}
