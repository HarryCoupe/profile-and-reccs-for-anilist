import { useRouter } from "next/router";
import Image from "next/image";

export default function ProfileContent() {
  const router = useRouter();
  const { avatarUrl, createdAt, siteUrl, bannerImageUrl } = router.query;

  return (
    <div>
      <h1>User Profile</h1>
      <Image src={avatarUrl} alt="User avatar" width={200} height={200} />
      <p>Joined: {new Date(createdAt * 1000).toLocaleDateString()}</p>
      <p>
        Profile: <a href={siteUrl}>{siteUrl}</a>
      </p>
      <Image src={bannerImageUrl} alt="User banner" width={200} height={200} />
    </div>
  );
}
