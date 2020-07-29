/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface GnosisProxyInterface extends Interface {
  functions: {};

  events: {};
}

export class GnosisProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GnosisProxy;
  attach(addressOrName: string): GnosisProxy;
  deployed(): Promise<GnosisProxy>;

  on(event: EventFilter | string, listener: Listener): GnosisProxy;
  once(event: EventFilter | string, listener: Listener): GnosisProxy;
  addListener(eventName: EventFilter | string, listener: Listener): GnosisProxy;
  removeAllListeners(eventName: EventFilter | string): GnosisProxy;
  removeListener(eventName: any, listener: Listener): GnosisProxy;

  interface: GnosisProxyInterface;

  functions: {};

  filters: {};

  estimate: {};
}