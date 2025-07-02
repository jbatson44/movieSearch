import type { ResultType } from "@/enums/resultTypeEnum";

export class SearchOptions {
  constructor(
    public Query: string,
    public Type: ResultType,
    public Year: string = "",
    public Page: string = "1",
  ) {}
}