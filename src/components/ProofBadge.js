import Badge from "./Badge";
import { PROOF_STATUS } from "../lib/proofStatus";

export default function ProofBadge({ status, full = false }) {
  const s = PROOF_STATUS[status];
  if (!s) return null;

  return (
    <Badge color={s.color} bg={s.bg}>
      {full ? s.label : s.short}
    </Badge>
  );
}
