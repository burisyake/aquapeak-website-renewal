import { apps, type AppItem } from "@/data/apps";

export type AppWithIcon = AppItem & { icon: string | null };

/** App Store の公開APIからアイコンURLを取得（1日キャッシュ）。 */
async function fetchIcons(ids: string[]): Promise<Record<string, string>> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${ids.join(",")}&country=jp`,
      { next: { revalidate: 86400 } },
    );
    const data = (await res.json()) as {
      results?: { trackId: number; artworkUrl512?: string }[];
    };
    const map: Record<string, string> = {};
    for (const r of data.results ?? []) {
      if (r.artworkUrl512) map[String(r.trackId)] = r.artworkUrl512;
    }
    return map;
  } catch {
    return {};
  }
}

export async function getAppsWithIcons(): Promise<AppWithIcon[]> {
  const icons = await fetchIcons(apps.map((a) => a.appId));
  return apps.map((a) => ({ ...a, icon: icons[a.appId] ?? null }));
}
