import Skill, { compare } from "models/Skill";

export const Programming = [
  new Skill("Typescript", 5),
  new Skill("JavaScript", 4),
  new Skill("Java", 3),
  new Skill("HTML", 3),
  new Skill("CSS", 3),
  new Skill("Solidity", 3),
  new Skill("C", 3),
  new Skill("C++", 3),
  new Skill("SQL", 3),
  new Skill("PHP", 2)
].sort(compare);
export const Frameworks = [
  new Skill("React", 4),
  new Skill("Feathersjs", 4),
  new Skill("Firebase", 2),
  new Skill("Spring", 2),
  new Skill("Slim"),
  new Skill("Threejs"),
  new Skill("Wordpress"),
  new Skill("Unity"),
  new Skill("Electron")
].sort(compare);
export const DesignCAD = [
  new Skill("CATIA v5"),
  new Skill("Solid Edge"),
  new Skill("SketchUp"),
  new Skill("Raster Editors"),
  new Skill("Vector Editors")
].sort(compare);
export const Prototyping = [
  new Skill("Figma", 2),
  new Skill("Invisio", 2),
  new Skill("Modelling"),
  new Skill("Wireframing"),
  new Skill("Prototyping")
].sort(compare);
export const SoftSkills = [
  new Skill("Assertivity"),
  new Skill("Communication"),
  new Skill("Conflict resolution"),
  new Skill("Management"),
  new Skill("Public speaking")
].sort(compare);
