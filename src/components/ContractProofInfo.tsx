import "./ContractProof.css";
import Container from "./Container";
import { useLoadContractProof } from "../lib/useLoadContractProof";
import InfoPiece from "./InfoPiece";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

function ContractProofInfo() {
  const { data } = useLoadContractProof();

  return (
    <Container className="ContractProof">
      <h3>Compiler</h3>
      <InfoPiece label="Compiler" data={data!.compiler!} />
      <InfoPiece label="Fift Commit" data={data!.fiftCommit?.slice(0, 8) ?? ""} />
      <InfoPiece label="Fiftlib Commit" data={data!.fiftLibCommit?.slice(0, 8) ?? ""} />
      <InfoPiece label="Command" data={data!.commandLine!} />
      <InfoPiece label="Verified" data={new TimeAgo("en-US").format(data!.verificationDate!)} />
    </Container>
  );
}

export default ContractProofInfo;
