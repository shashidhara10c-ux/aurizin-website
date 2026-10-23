import { useState, useEffect, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useListContactSubmissions,
  getListContactSubmissionsQueryKey,
  type ContactSubmission,
} from "@workspace/api-client-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Lock,
  Loader2,
  LogOut,
  Inbox,
  Mail,
  Phone,
  RefreshCw,
} from "lucide-react";

const TOKEN_KEY = "aurizin_admin_token";

const SERVICE_LABELS: Record<string, string> = {
  ai: "AI Solutions",
  software: "Software Development",
  web: "Web Development",
  mobile: "Mobile App Development",
  cloud: "Cloud Solutions",
  other: "Other / General",
};

const BUDGET_LABELS: Record<string, string> = {
  under10k: "Under $10k",
  "10k-50k": "$10k–$50k",
  "50k-100k": "$50k–$100k",
  "100k+": "$100k+",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-3": "1–3 months",
  "3-6": "3–6 months",
  flexible: "Flexible",
};

function label(map: Record<string, string>, value: string | null | undefined): string {
  if (!value) return "—";
  return map[value] ?? value;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function LoginGate({ onAuthenticated }: { onAuthenticated: (token: string) => void }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) onAuthenticated(password.trim());
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass-panel w-full max-w-md p-8 md:p-10 rounded-3xl">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
          <Lock className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Enter the admin password to view contact submissions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Admin password"
            className="bg-background h-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <Button type="submit" size="lg" className="w-full h-12">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

function Dashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
  const { data, isLoading, isError, error, refetch, isFetching } =
    useListContactSubmissions({
      query: {
        queryKey: getListContactSubmissionsQueryKey(),
        retry: false,
        staleTime: 0,
        gcTime: 0,
      },
      request: { headers: { Authorization: `Bearer ${token}` } },
    });

  const isUnauthorized = isError && (error as { status?: number })?.status === 401;

  // Invalid/expired password — bounce back to the login gate.
  useEffect(() => {
    if (isUnauthorized) onLogout();
  }, [isUnauthorized, onLogout]);

  const submissions: ContactSubmission[] = data ?? [];

  return (
    <section className="pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Contact Submissions</h1>
            <p className="text-muted-foreground mt-1">
              {submissions.length} {submissions.length === 1 ? "message" : "messages"} received
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => refetch()} disabled={isFetching}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="ghost" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-32 text-muted-foreground">
            <Loader2 className="mr-3 h-6 w-6 animate-spin" /> Loading submissions...
          </div>
        ) : isError ? (
          <div className="glass-panel rounded-2xl p-12 text-center">
            <p className="text-destructive font-medium">Couldn't load submissions.</p>
            <p className="text-muted-foreground text-sm mt-1">Please refresh and try again.</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="glass-panel rounded-2xl p-16 text-center">
            <Inbox className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold">No submissions yet</h3>
            <p className="text-muted-foreground mt-1">
              Messages from the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="whitespace-nowrap">Received</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead className="min-w-[280px]">Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((s) => (
                    <TableRow key={s.id} className="align-top">
                      <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                        {formatDate(s.createdAt)}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{s.name}</div>
                        <a
                          href={`mailto:${s.email}`}
                          className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
                        >
                          <Mail className="h-3 w-3" /> {s.email}
                        </a>
                        {s.phone ? (
                          <a
                            href={`tel:${s.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mt-1"
                          >
                            <Phone className="h-3 w-3" /> {s.phone}
                          </a>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        {s.service ? (
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {label(SERVICE_LABELS, s.service)}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {label(BUDGET_LABELS, s.budget)}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {label(TIMELINE_LABELS, s.timeline)}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-md">
                        <p className="whitespace-pre-wrap">{s.message}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Admin() {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? sessionStorage.getItem(TOKEN_KEY) : null,
  );

  const authenticate = (value: string) => {
    sessionStorage.setItem(TOKEN_KEY, value);
    setToken(value);
  };

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    queryClient.removeQueries({ queryKey: getListContactSubmissionsQueryKey() });
    setToken(null);
  }, [queryClient]);

  return (
    <>
      <SEO title="Admin Dashboard" description="Aurizin Innovations admin dashboard." />
      {token ? (
        <Dashboard token={token} onLogout={logout} />
      ) : (
        <LoginGate onAuthenticated={authenticate} />
      )}
    </>
  );
}
