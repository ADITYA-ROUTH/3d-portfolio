export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    homepage: string | null;
    updated_at: string;
}

export async function fetchGithubRepos(username: string = "adityarouth"): Promise<GithubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);

        if (!response.ok) {
            console.error(`Failed to fetch GitHub repos: ${response.status} ${response.statusText}`);
            return [];
        }

        const repos: GithubRepo[] = await response.json();

        // Filter out forks and return the top 6 most starred/recent
        return repos
            .filter((repo: any) => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Primary sort by stars
            .slice(0, 6);
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}
