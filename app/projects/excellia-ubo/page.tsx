import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import OwnershipGraphClient from "../../components/OwnershipGraphClient";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Excellia — UBO Automation",
  description:
    "Confidential case study on automating Ultimate Beneficial Owner determination using recursive SQL, secure workflows, and audit-ready outputs.",
};

export default function ExcelliaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        {/* ================= HERO ================= */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Confidential case study
            </p>

            <h1 className="section-title text-4xl font-semibold text-white">
              Excellia — UBO Determination Automation
            </h1>

            <p className="max-w-3xl text-base text-zinc-300">
              Designed and implemented an automated system to determine Ultimate
              Beneficial Owners (UBO) across complex, multi-level ownership
              structures under strict compliance and confidentiality constraints.
            </p>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              <span className="tag px-4 py-2">PostgreSQL</span>
              <span className="tag px-4 py-2">Recursive SQL</span>
              <span className="tag px-4 py-2">Supabase RPC</span>
              <span className="tag px-4 py-2">Row Level Security</span>
              <span className="tag px-4 py-2">Compliance</span>
            </div>
          </div>
        </Reveal>

        {/* ================= CONTEXT ================= */}
        <Reveal>
          <div className="mt-14 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              Context & constraints
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>
                • Ownership structures included multiple layers of indirect
                participation across legal entities.
              </li>
              <li>
                • UBO resolution required deterministic and explainable results
                suitable for audit and regulatory review.
              </li>
              <li>
                • Manual analysis relied on spreadsheets and ad-hoc SQL queries,
                increasing operational risk and review time.
              </li>
              <li>
                • Sensitive client data could not be exposed at the application
                layer or through debugging workflows.
              </li>
            </ul>
          </div>
        </Reveal>

        {/* ================= PROBLEM & SOLUTION ================= */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="section-title text-2xl font-semibold text-white">
                Problem
              </h2>

              <p className="mt-4 text-sm text-zinc-300">
                Determining Ultimate Beneficial Owners is a compliance-critical
                process. Indirect ownership paths must be traced accurately,
                consistently, and reproducibly. Existing workflows were slow,
                error-prone, and difficult to audit.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="section-title text-2xl font-semibold text-white">
                Solution
              </h2>

              <p className="mt-4 text-sm text-zinc-300">
                Built an end-to-end automation workflow that resolves ownership
                chains at the database level using recursive SQL, exposing only
                validated, audit-ready results to the application layer.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= TECHNICAL DECISIONS ================= */}
        <Reveal>
          <div className="mt-10 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              Key technical decisions
            </h2>

            <ul className="mt-4 space-y-4 text-sm text-zinc-300">
              <li>
                <strong className="text-white">
                  Recursive SQL over application traversal:
                </strong>{" "}
                ensured deterministic results, reduced data leakage risk, and
                simplified auditability.
              </li>
              <li>
                <strong className="text-white">
                  RPC-based execution layer:
                </strong>{" "}
                centralized business logic and prevented direct table access.
              </li>
              <li>
                <strong className="text-white">
                  Performance safeguards:
                </strong>{" "}
                indexed ownership relationships, bounded recursion depth, and
                pre-aggregated audit views.
              </li>
              <li>
                <strong className="text-white">
                  Security by design:
                </strong>{" "}
                Supabase Row Level Security enforced entity-level access control
                across all workflows.
              </li>
            </ul>
          </div>
        </Reveal>



        {/* ================= OUTCOME ================= */}
        <Reveal>
          <div className="mt-10 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              Outcome & impact
            </h2>

            <p className="mt-4 text-sm text-zinc-300">
              The system reduced manual analysis effort, improved traceability,
              and enabled faster and more reliable compliance decisions. All
              results are audit-ready by default, while maintaining strict data
              confidentiality.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              <span className="tag px-4 py-2">Deterministic results</span>
              <span className="tag px-4 py-2">Audit-ready</span>
              <span className="tag px-4 py-2">Reduced risk</span>
              <span className="tag px-4 py-2">Operational efficiency</span>
            </div>
          </div>
        </Reveal>

        {/* ================= FOOTER NOTE ================= */}
        <Reveal>
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm text-zinc-400">
              Detailed schema, SQL logic, and performance benchmarks available
              upon request for vetted teams.
            </p>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
